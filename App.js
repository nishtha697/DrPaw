import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from "./src/MapScreen/MapScreen";
import VetHospitalList from "./src/VetHospitalList/VetHospitalList";
import { enableScreens } from 'react-native-screens';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import BackButtonSVG from "./src/SVGs/BackButtonSVG";
import { BackHandler } from 'react-native';

enableScreens();

const Stack = createStackNavigator();
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#EBEBEB", // This will change the dropdown color to red.
    },
};
export default function App() {

    return (
      <PaperProvider theme={theme}>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Vet Hospital List">
                  <Stack.Screen
                      name="Vet Hospital List"
                      component={VetHospitalList}
                      options={{
                          headerShown: true,
                          headerLeft: () => (
                              <TouchableOpacity onPress={() => BackHandler.exitApp()} >
                                  <BackButtonSVG style={{marginStart: 10}}/>
                              </TouchableOpacity>
                          ),
                      }}
                  />
                  <Stack.Screen
                      name="MapScreen"
                      component={MapScreen}
                      options={{ headerShown: false }}
                  />

              </Stack.Navigator>
          </NavigationContainer>
      </PaperProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
