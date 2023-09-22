// Importing required modules and components
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import DropdownSVG from "../SVGs/DropdownSVG";
import {Menu} from 'react-native-paper';
import styles from './FilterComponentStyles';

/** FilterComponent is a functional component used to render
 * a set of filtering options for the user, allowing them to
 * sort and select facility types.
 * */
const FilterComponent = ({
                             sortMenuVisible, setSortMenuVisible,
                             selectedSortByValue, setSelectedSortByValue,
                             facilityMenuVisible, setFacilityMenuVisible,
                             selectedFacilityTypeValue, setSelectedFacilityTypeValue, style
                         }) => {

    // Handlers to toggle visibility of the sort menu
    const openSortMenu = () => setSortMenuVisible(true);
    const closeSortMenu = () => setSortMenuVisible(false);

    // Handlers to toggle visibility of the facility menu
    const openFacilityMenu = () => setFacilityMenuVisible(true);
    const closeFacilityMenu = () => setFacilityMenuVisible(false);

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >
            <View style={styles.pickerContainer}>
                <Menu
                    visible={sortMenuVisible}
                    onDismiss={closeSortMenu}
                    anchor={<TouchableOpacity onPress={openSortMenu} style={[styles.pickerStyle,
                        {backgroundColor: style.backgroundColor}]}>
                        <Text
                            style={{fontSize: 16, paddingVertical: 5}}>{selectedSortByValue}</Text>
                        <DropdownSVG style={{alignSelf: "center"}}/>
                    </TouchableOpacity>}
                >
                    <Menu.Item onPress={() => {
                        setSelectedSortByValue('Sort by');
                        closeSortMenu();
                    }} title="Sort by"/>
                    <Menu.Item onPress={() => {
                        setSelectedSortByValue('Option 1');
                        closeSortMenu();
                    }} title="Option 1"/>
                    <Menu.Item onPress={() => {
                        setSelectedSortByValue('Option 2');
                        closeSortMenu();
                    }} title="Option 2"/>
                </Menu>
            </View>
            <View style={styles.pickerContainer}>
                <Menu
                    visible={facilityMenuVisible}
                    onDismiss={closeFacilityMenu}
                    anchor={<TouchableOpacity onPress={openFacilityMenu} style={[styles.pickerStyle,
                        {width: 140, backgroundColor: style.backgroundColor}]}>
                        <Text style={{
                            fontSize: 16,
                            paddingVertical: 5
                        }}>{selectedFacilityTypeValue}</Text>
                        <DropdownSVG style={{alignSelf: "center"}}/>
                    </TouchableOpacity>}
                >
                    <Menu.Item onPress={() => {
                        setSelectedFacilityTypeValue('Vet Hospital');
                        closeFacilityMenu();
                    }} title="Vet Hospital"/>
                    <Menu.Item onPress={() => {
                        setSelectedFacilityTypeValue('Vet Pharmacy');
                        closeFacilityMenu();
                    }} title="Vet Pharmacy"/>
                </Menu>
            </View>
            <TouchableOpacity
                style={[styles.filterButton, {backgroundColor: style.backgroundColor}]}
                onPress={() => {
                }}>
                <Text style={styles.filterText}>Open Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.filterButton, {backgroundColor: style.backgroundColor}]}
                onPress={() => {
                }}>
                <Text style={styles.filterText}>Distance</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

// Exporting the component to be used in other parts of the application
export default FilterComponent;
