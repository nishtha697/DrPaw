// Import necessary React and React Native libraries and components
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import fetchData from '../utilities/getApiData.js';
import * as Location from 'expo-location';
import styles from './VetHospitalListStyles'; // Importing the styles
import GoToMapButtonSVG from "../SVGs/GoToMapButtonSVG";
import {useNavigation} from "@react-navigation/native";
import SearchIcon from "../SVGs/SearchIcon";
import VetHospitalItem from "../VetHospitalItem/VetHospitalItem";
import FilterComponent from "../FilterComponent/FilterComponent";

/**
 * VetHospitalList Component
 * This component renders the list of veterinary hospitals based on the user's search and selected filters.
 */
const VetHospitalList = () => {

    const [searchQuery, setSearchQuery] = useState(null)
    const navigation = useNavigation()
    const [data, setData] = useState([]);
    const [initialRegion, setInitialRegion] = useState(null);
    const [loading, setLoading] = useState(true); // New state for handling loading
    const [error, setError] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedSortByValue, setSelectedSortByValue] = useState('Sort by');
    const [selectedFacilityTypeValue, setSelectedFacilityTypeValue] = useState('Vet Hospital');
    const [sortMenuVisible, setSortMenuVisible] = React.useState(false);
    const [facilityMenuVisible, setFacilityMenuVisible] = React.useState(false);

    const defaultRegion = {
        latitude: 40.7128,
        longitude: -74.0060,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    /**
     * @function calculateDistance
     * This function calculates the distance between two geographical points using the Haversine formula.
     * @param {number} lat1 - Latitude of the first point.
     * @param {number} lon1 - Longitude of the first point.
     * @param {number} lat2 - Latitude of the second point.
     * @param {number} lon2 - Longitude of the second point.
     * @returns {number} - The distance between the two points in kilometers.
     */
    function calculateDistance(lat1, lon1, lat2, lon2) {
        function toRad(x) {
            return (x * Math.PI) / 180;
        }

        const R = 6371; // Radius of the earth in km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) *
            Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    }

    /**
     * useEffect hook for fetching user location and data on component mount.
     */
    useEffect(() => {
        const fetchLocationAndData = async () => {
            try {
                console.log('Requesting permission');  // <-- More Logs
                const {status} = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    console.log('Location permission not granted');
                    setError('Location permission not granted'); // <-- Informing user about
                                                                 // permission denial.
                    setInitialRegion(defaultRegion);
                    return;
                }

                const servicesEnabled = await Location.hasServicesEnabledAsync();
                if (!servicesEnabled) {
                    console.error('Location services are not enabled');
                    throw new Error('Location services are not enabled');
                }

                console.log('Fetching location'); // <-- More Logs
                const location = await Location.getCurrentPositionAsync(
                    {accuracy: Location.Accuracy.High});
                const {latitude, longitude} = location.coords;
                console.log('Location fetched:', latitude, longitude); // <-- More Logs

                const currentRegion = {
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                };
                setInitialRegion(currentRegion);

                console.log('Fetching data'); // <-- More Logs
                const data = await fetchData();
                console.log('Data fetched:', data); // <-- More Logs

                if (!data || !data.documents) {
                    throw new Error('No data found');
                }

                const transformedData = data.documents.map(document => {
                    // Use latitude and longitude directly from currentRegion
                    const latitude = parseFloat(document.location.coordinates[1].$numberDouble);
                    const longitude = parseFloat(document.location.coordinates[0].$numberDouble);
                    const distance = calculateDistance(
                        currentRegion.latitude,
                        currentRegion.longitude,
                        latitude,
                        longitude
                    );
                    return {...document, distance};
                });
                console.log("Transformed data: ", transformedData)

                setData(transformedData);
                setFilteredData(transformedData);
                setLoading(false);
                // Rest of the code
            } catch (error) {
                console.log('Error occurred:', error);
                setError('Error loading data!');
                setInitialRegion(defaultRegion);
                setLoading(false);
            } finally {
                console.log("Setting loading as false");
                setLoading(false);
            }
        };

        fetchLocationAndData();
    }, []);

    /**
     * @function handleSearchButtonPress
     * This function handles the logic when the search button is pressed, filtering the hospital data based on the search query.
     */
    const handleSearchButtonPress = () => {
        if (!searchQuery) {
            setFilteredData(data); // if searchQuery is empty, set filteredData to the original data
            return;
        }

        const lowercasedQuery = searchQuery.toLowerCase();

        const newData = data.filter(vetHospital => {
            const {name, address, services_offered} = vetHospital;
            if (
                name.toLowerCase().includes(lowercasedQuery) ||
                address.toLowerCase().includes(lowercasedQuery) ||
                services_offered.some(service => service.toLowerCase().includes(lowercasedQuery))
            ) {
                return true;
            }
            return false;
        });

        setFilteredData(newData);

    }

    const filterStyle = {
        backgroundColor: "white"
    }

    return (
        <View style={styles.container}>
            <Text style={styles.findTitle}>
                Find a Vet
            </Text>
            <TouchableOpacity style={styles.mapVersionButton}
                              onPress={() => navigation.navigate('MapScreen')}>
                <GoToMapButtonSVG/>
            </TouchableOpacity>
            <TextInput
                style={styles.searchBox}
                placeholder="Search for Vet"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <TouchableOpacity onPress={() => handleSearchButtonPress()}
                              style={styles.searchIcon}><SearchIcon/></TouchableOpacity>
            <Text style={styles.searchDesc}>Enter a location or specific services</Text>
            <View style={styles.filterContainer}>

                <FilterComponent
                    sortMenuVisible={sortMenuVisible}
                    setSortMenuVisible={setSortMenuVisible}
                    selectedSortByValue={selectedSortByValue}
                    setSelectedSortByValue={setSelectedSortByValue}
                    facilityMenuVisible={facilityMenuVisible}
                    setFacilityMenuVisible={setFacilityMenuVisible}
                    selectedFacilityTypeValue={selectedFacilityTypeValue}
                    setSelectedFacilityTypeValue={setSelectedFacilityTypeValue}
                    style={filterStyle}
                />
            </View>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff"
                                   style={{position: "absolute", top: 300}}/>
            ) : error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : (
                    <View style={{position: "absolute", top: 170, bottom: 0, left: 0, right: 0}}>
                        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={styles.scrollContainer}>
                            {Array.isArray(filteredData) ? (
                                filteredData.map((vetHospital, key) => <VetHospitalItem key={key}
                                                                                        vetHospital={vetHospital}/>)
                            ) : (
                                 <Text style={styles.errorText}>Invalid data format received!</Text>
                             )}
                        </ScrollView>
                    </View>
                )}
        </View>
    );

};

export default VetHospitalList;