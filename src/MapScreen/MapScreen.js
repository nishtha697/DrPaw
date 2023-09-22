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

const MapScreen = ({route}) => {
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

    const defaultRegion = {
        latitude: 40.7128,
        longitude: -74.0060,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const requestLocationPermission = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Location permission denied');
            setInitialRegion(defaultRegion); // Set the default region here
            return;
        }
        console.log('You can use the location');
    };

    const askForCameraPermission = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        if (status === 'granted') {
            setCameraOpen(true);
        } else {
            console.error('Camera permission not granted');
        }
    };

    useEffect(() => {
        requestLocationPermission();
    }, []);

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

        // Fetch other data...
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

    const filterStyle = {
        backgroundColor: "#EBEBEB"
    }
    return (
        <View style={styles.container}>

            {/* Conditionally Render MapView or Camera */}
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
                     <MapView
                         style={styles.map}
                         region={routeToShow || initialRegion
                                 || defaultRegion} // use region prop instead of initialRegion
                         customMapStyle={mapStyle}
                     >
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

export default MapScreen;
