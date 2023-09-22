// Importing necessary libraries and components
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import fetchData from '../utilities/getApiData.js';
import * as Location from 'expo-location';
import styles from './MapScreenStyles'; // Importing the styles
import CameraIconSVG from "../SVGs/CameraIconSVG";
import BackButtonWithTextSVG from "../SVGs/BackButtonWithTextSVG";
import UserProfileSVG from "../SVGs/UserProfileSVG";
import {Camera} from 'expo-camera';
import CurrentLocationMarkerSVG from "../SVGs/CurrentLocationMarkerSVG";
import VetClinicsMarkerSVG from "../SVGs/VetClinicsMarkerSVG";
import MapScreenPawSVG from "../SVGs/MapScreenPawSVG";
import mapStyle from './mapStyle';
import {useNavigation} from "@react-navigation/native";
import FilterComponent from "../FilterComponent/FilterComponent";

/**
 * MapScreen Component is responsible for rendering maps, markers, and providing user interface
 * elements to interact with maps and cameras. It manages the state for user’s location, camera,
 * sort and filter options.
 */
const MapScreen = ({route}) => {
    // Initialize state variables
    let routeToShow = null;
    if (route !== undefined && route.params !== undefined) {
        console.log('Received coordinates:', route.params);
        routeToShow = route.params.routeToShow;
    }
    const [coordinates, setCoordinates] = useState([]);
    const [initialRegion, setInitialRegion] = useState(null);
    const [isCameraOpen, setCameraOpen] = useState(false);
    const [selectedSortByValue, setSelectedSortByValue] = useState('Sort by');
    const [selectedFacilityTypeValue, setSelectedFacilityTypeValue] = useState('Vet Hospital');
    const [sortMenuVisible, setSortMenuVisible] = React.useState(false);
    const [facilityMenuVisible, setFacilityMenuVisible] = React.useState(false);
    const navigation = useNavigation();

    // Initialize the default region
    const defaultRegion = {
        latitude: 40.7128,
        longitude: -74.0060,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    // This function is responsible for navigating back to the previous screen
    const handleBackPress = () => {
        navigation.goBack();
    };

    /**
     * Requests permission to access user's location
     * @async
     */
    const requestLocationPermission = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Location permission denied');
            setInitialRegion(defaultRegion); // Set the default region here
            return;
        }
        console.log('You can use the location');
    };

    /**
     * Requests permission to access device camera and sets the camera state.
     * @async
     */
    const askForCameraPermission = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        if (status === 'granted') {
            setCameraOpen(true);
        } else {
            console.error('Camera permission not granted');
        }
    };

    // This effect runs once on component mount and requests location permission
    useEffect(() => {
        requestLocationPermission();
    }, []);

    // This effect is responsible for fetching the current location and required API data when the
    // component is mounted
    useEffect(() => {
        const fetchLocation = async () => {
            let location = await Location.getCurrentPositionAsync({
                                                                      accuracy: Location.Accuracy.High,
                                                                  });
            const {latitude, longitude} = location.coords;
            setInitialRegion({
                                 latitude,
                                 longitude,
                                 latitudeDelta: 0.0922,
                                 longitudeDelta: 0.0421,
                             });
        };

        // Fetch current location
        fetchLocation()
            .catch(error => console.log(error));

        // Fetch API data
        fetchData()
            .then(data => {
                const transformedCoordinates = data.documents.map(document => {
                    const longitude = parseFloat(document.location.coordinates[0]['$numberDouble']);
                    const latitude = parseFloat(document.location.coordinates[1]['$numberDouble']);
                    const name = document.name;

                    return {
                        longitude,
                        latitude,
                        name
                    };
                });
                setCoordinates(transformedCoordinates);
            })
            .catch(error => {
                console.log(`Error fetching data: ${error}`);
            });

    }, [setInitialRegion]);

    // Define styling for the filter
    const filterStyle = {
        backgroundColor: "#EBEBEB"
    }
    return (
        <View style={styles.container}>

            {/* Render MapView or Camera based on the state of isCameraOpen */}
            {isCameraOpen ? (
                <Camera style={{flex: 1}} type={Camera.Constants.Type.back}/>
            ) : (
                 <>
                     <View style={styles.headerContainer}/>
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
                     {/* Render MapView along with markers and other overlay components */}
                     <MapView
                         style={styles.map}
                         region={routeToShow || initialRegion
                                 || defaultRegion} // use region prop instead of initialRegion
                         customMapStyle={mapStyle}
                     >
                         {/* Render the current user location marker if the initialRegion is available */}
                         {initialRegion && (
                             <Marker
                                 coordinate={initialRegion}
                             >
                                 <View style={{alignItems: 'center'}}>
                                     <CurrentLocationMarkerSVG/>
                                     <Text style={{padding: 5, fontSize: 20}}>You're here</Text>
                                 </View>
                             </Marker>
                         )}
                         {/* Map over the coordinates state and render a marker for each coordinate */}
                         {coordinates && coordinates.map((coordinate, index) => (
                             <Marker
                                 key={index}
                                 coordinate={coordinate}
                             >
                                 <View style={{alignItems: 'center'}}>
                                     <VetClinicsMarkerSVG/>
                                 </View>
                                 <Callout>
                                     <View style={{alignItems: 'center', width: 150}}>
                                         <Text>{coordinate.name}</Text>
                                     </View>
                                 </Callout>
                             </Marker>
                         ))}
                     </MapView>
                     {/* Overlay components such as back button and profile button */}
                     <View style={styles.overlay}>
                         <TouchableOpacity
                             style={styles.backButton}
                             onPress={handleBackPress}
                         >
                             <BackButtonWithTextSVG style={styles.buttonText}/>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.profileButton}>
                             <UserProfileSVG style={styles.profileButton}/>
                         </TouchableOpacity>

                     </View>
                     {/* Button to request camera permission and trigger camera view */}
                     <TouchableOpacity
                         onPress={askForCameraPermission}
                     >
                         <View style={styles.cameraIcon}>
                             <CameraIconSVG/>
                         </View>
                     </TouchableOpacity>
                     <MapScreenPawSVG style={styles.paw}/>
                 </>
             )}
        </View>
    );

};

// Exporting the MapScreen component to be used in other parts of the application
export default MapScreen;
