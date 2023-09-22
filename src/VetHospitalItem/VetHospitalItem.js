import React from 'react';
import styles from "./VetHospitalItemStyles";
import {Text, TouchableOpacity, View} from "react-native";
import VetClinicPhotoSVG from "../SVGs/VetClinicPhotoSVG";
import FilledStarSVG from "../SVGs/FilledStarSVG";
import EmptyStarSVG from "../SVGs/EmptyStarSVG";
import ServicesSVG from "../SVGs/ServicesSVG";
import CalendarSVG from "../SVGs/CalendarSVG";
import LocationSVG from "../SVGs/LocationSVG";
import {useNavigation} from "@react-navigation/native";

const VetHospitalItem = ({vetHospital}) => {

    const navigation = useNavigation();

    const longitude = parseFloat(vetHospital.location.coordinates[0]['$numberDouble']);
    const latitude = parseFloat(vetHospital.location.coordinates[1]['$numberDouble']);

    const routeToShow = {
        latitude,
        longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    };

    console.log("Inside VetHospitalItem");
    console.log(typeof vetHospital.name, vetHospital.name);

    const serviceMapping = {
        veterinary_care: 'Veterinary Care',
        pharmacy: 'Pharmacy',
        health: 'Health',
        store: 'Store',
    };

    return (
        <View style={styles.container}>

            <VetClinicPhotoSVG style={styles.photo}/>
            <Text style={styles.name}>{vetHospital.name}</Text>
            <Text style={styles.address}>{vetHospital.address}</Text>
            <View style={styles.ratingContainer}>
                <View style={{flexDirection: 'row', paddingTop: 2}}>
                    {[...Array(5)].map((_, i) =>
                                           i < Math.round(
                                               parseFloat(vetHospital.rating.$numberDouble) || 0)
                                           ? <FilledStarSVG key={i}/>
                                           : <EmptyStarSVG key={i}/>
                    )}
                </View>
                <Text style={styles.noOfReviews}>
                    ({vetHospital?.user_ratings_total?.$numberInt || 0})
                </Text>
            </View>
            <View style={styles.locationIcon}><LocationSVG/>
                <Text style={styles.distance}>{parseFloat(vetHospital.distance)
                    .toFixed(2)} kms</Text>
            </View>
            <View style={styles.innerContainer}>
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

export default VetHospitalItem;
