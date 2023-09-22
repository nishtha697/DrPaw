# Dr Paw

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Built With](#built-with)

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js: Download and install it from [nodejs.org](https://nodejs.org/).
- Expo CLI: Install it using npm with the following command.

````
  npm install -g expo-cli
````
- A physical Android/iOS device or an emulator for testing.

### Installation
- Clone the repository.
````
git clone <repository-url>
````
- Navigate to the project directory.
````
cd dr-paw-directory-app
````
- Install the project dependencies.
````
npm install
````

### Running the Application
- Start the development server.
````
expo start
````
- Scan the QR code using the Expo Go app on your Android/iOS device or launch the app on an emulator.

### Features

#### 1. **Interactive Map View**
- Displays an interactive map with custom design showing various markers, representing veterinary clinics and current location of user.
- Users can view their current location and navigate through the map.

#### 2. **Customizable Markers**
- Displays customized markers on the map for different locations, using SVGs for a unique appearance.
- Provides callouts for markers displaying additional information, such as name of the location.

#### 3. **Filtering and Sorting (Only UI)**
- Allows users to filter and sort the visible locations, according to the selected criteria and facility type, through a dedicated filter component.
- Only Ui is available for now, as the API did not have complete required information. 

#### 4. **Camera Access**
- Requests and gains access to the user's camera, allowing them to capture photos from within the app.
- Offers a dedicated button for triggering the camera view.

#### 5. **Location Access**
- Requests and gains access to the user's location to display the current location marker on the map.

#### 6. **Vet Hospital List view**
- List all the vet hospitals available with details from Figma
- Allows users to search by name, address or services provided.
- Navigates to Map View of a particular vet hospital

#### 7. **Error and Status Handling**
- Manages errors effectively, logging them for debugging purposes.
- Handles permissions and informs users about the status of location and camera access, enhancing user experience.

### Built With

- [React Native](https://reactnative.dev/) - Framework for building the mobile application.
- [Expo](https://expo.dev/) - Framework and a platform for universal React applications.
- [React Navigation](https://reactnavigation.org/) - Routing and navigation for your React Native apps.
- [Axios](https://axios-http.com/) - Promise-based HTTP client for making requests.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Module for loading environment variables from a .env file.
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) - Provides access to the location services.
- [Expo Splash Screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/) - Control the splash screen for your app.
- [Expo Status Bar](https://docs.expo.dev/versions/latest/sdk/status-bar/) - Provides the StatusBar component to control the app status bar.
- [React Native Config](https://github.com/luggit/react-native-config) - Module to expose config variables to your JavaScript code.
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) - Provides native-driven gesture management APIs for building best possible touch-based experiences.
- [React Native Maps](https://github.com/react-native-maps/react-native-maps) - Provides MapView component for rendering maps.
- [React Native Paper](https://callstack.github.io/react-native-paper/) - Material Design for React Native (Android & iOS).
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context) - A flexible way to handle safe area insets in JS.
- [React Native Screens](https://github.com/software-mansion/react-native-screens) - Provides native navigation container components.
- [React Native SVG](https://github.com/react-native-svg/react-native-svg) - SVG library for React Native.
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native.
- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/) - Provides an interface for the device's camera(s).






