import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         justifyContent: 'flex-end',
                                         alignItems: 'center',
                                     },
                                     headerContainer: {
                                         width: '100%',
                                         height: 100,
                                         backgroundColor: '#D9D9D9',
                                         zIndex: 2
                                     },
                                     map: {
                                         width: Dimensions.get('window').width,
                                         height: Dimensions.get('window').height,
                                     },
                                     cameraIcon: {
                                         position: 'absolute',
                                         bottom: 37,
                                         alignSelf: 'center'
                                     },
                                     backButton: {
                                         position: 'absolute',
                                         top: 39,
                                         left: 10
                                     },
                                     profileButton: {
                                         position: 'absolute',
                                         top: 15,
                                         right: 11,
                                     },
                                     buttonText: {
                                         fontSize: 18,
                                         color: '#000', // you can change it as per your design
                                     },
                                     overlay: {
                                         position: 'absolute',
                                         top: 0,
                                         left: 0,
                                         right: 0,
                                         flexDirection: 'row',
                                         justifyContent: 'space-between',
                                         paddingHorizontal: 10,
                                         paddingTop: 10,
                                     },
                                     paw: {
                                         position: 'absolute',
                                         bottom: 0,
                                         right: 0,
                                         zIndex: 10,
                                     },
                                     filterContainer: {
                                         position: 'absolute',
                                         top: 97,
                                         alignSelf: "center",
                                         flexDirection: "row",
                                         justifyContent: "space-between",
                                         zIndex: 1,
                                     }
                                 });

export default styles;
