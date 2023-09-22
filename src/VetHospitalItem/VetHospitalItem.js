// Import necessary React and React Native libraries and components
import React from 'react';
import styles from "./VetHospitalItemStyles";
import {Text, TouchableOpacity, View} from "react-native";
// Import SVG components
import VetClinicPhotoSVG from "../SVGs/VetClinicPhotoSVG";
import FilledStarSVG from "../SVGs/FilledStarSVG";
import EmptyStarSVG from "../SVGs/EmptyStarSVG";
import ServicesSVG from "../SVGs/ServicesSVG";
import CalendarSVG from "../SVGs/CalendarSVG";
import LocationSVG from "../SVGs/LocationSVG";
// Import navigation hook from react-navigation
import {useNavigation} from "@react-navigation/native";

/**
 * VetHospitalItem Component
 * This component represents an individual item in the list of veterinary hospitals, displaying various details about the hospital.
 * @param {Object} vetHospital - The veterinary hospital data object.
 */
const VetHospitalItem = ({vetHospital}) => {

    // Obtain navigation object from useNavigation hook to navigate between screens
    const navigation = useNavigation();

    // Parse longitude and latitude from vetHospital prop
    const longitude = parseFloat(vetHospital.location.coordinates[0]['$numberDouble']);
    const latitude = parseFloat(vetHospital.location.coordinates[1]['$numberDouble']);

    // Define the region to display in the map
    const routeToShow = {
        latitude,
        longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    };

    // Mapping of services to their display names
    const serviceMapping = {
        veterinary_care: 'Veterinary Care',
        pharmacy: 'Pharmacy',
        health: 'Health',
        store: 'Store',
    };

    // Render the VetHospitalItem component
    return (
        <View style={styles.container}>

            <VetClinicPhotoSVG style={styles.photo}/>
            <Text style={styles.name}>{vetHospital.name}</Text> {/* Display the name of the hospital */}
            <Text style={styles.address}>{vetHospital.address}</Text> {/* Display the address of the hospital */}
            {/* Display the rating using FilledStarSVG and EmptyStarSVG components */}
            <View style={styles.ratingContainer}>
                <View style={{flexDirection: 'row', paddingTop: 2}}>
                    {[...Array(5)].map((_, i) =>
                                           i < Math.round(
                                               parseFloat(vetHospital.rating.$numberDouble) || 0)
                                           ? <FilledStarSVG key={i}/>
                                           : <EmptyStarSVG key={i}/>
                    )}
                </View>
                {/* Display the number of reviews */}
                <Text style={styles.noOfReviews}>
                    ({vetHospital?.user_ratings_total?.$numberInt || 0})
                </Text>
            </View>
            {/* Display the distance to the hospital */}
            <View style={styles.locationIcon}><LocationSVG/>
                <Text style={styles.distance}>{parseFloat(vetHospital.distance)
                    .toFixed(2)} kms</Text>
            </View>
            <View style={styles.innerContainer}>
                {/* Display the services offered and provide a button to book an appointment */}
                <View style={styles.innerContainerRow}>
                    <ServicesSVG style={styles.innerContainerIcon}/>
                    <Text style={styles.innerContainerText}>{vetHospital['services_offered'].map(
                        service => serviceMapping[service] || service).join(', ')}</Text>
                </View>
                <View style={styles.innerContainerRow}>
                    <CalendarSVG style={[styles.innerContainerIcon, {marginStart: 7}]}/>

                    <TouchableOpacity style={styles.innerContainerText}><Text>Book an
                        Appointment</Text></TouchableOpacity>
                </View>
                {/* Display a button to navigate to the MapScreen with the hospital's location */}
                <TouchableOpacity style={styles.mapsButton}
                                  onPress={() => {
                                      console.log('Navigating with coordinates:', routeToShow);
                                      navigation.navigate('MapScreen',
                                                          {routeToShow: routeToShow})
                                  }
                                  }>
                    <View>
                        <Text style={styles.mapText}>Maps</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    );
}

// Export the component for use in other parts of the application
export default VetHospitalItem;
