import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         justifyContent: 'flex-end',
                                         alignItems: 'center',
                                         backgroundColor: '#faf9f9'
                                     },
                                     searchBox: {
                                         height: 40,
                                         padding: 10,
                                         backgroundColor: 'white',
                                         borderRadius: 8,
                                         position: 'absolute',
                                         top: 63,
                                         left: 12,
                                         right: 12,
                                         borderWidth: 1,
                                         borderColor: 'grey',
                                         alignContent: "flex-start"
                                     },
                                     searchIcon: {
                                         position: "absolute",
                                         top: 69,
                                         right: 18,
                                         zIndex: 1
                                     },
                                     searchDesc: {
                                         position: "absolute",
                                         top: 108,
                                         left: 13,
                                         color: 'grey',
                                     },
                                     findTitle: {
                                         color: 'black',
                                         position: 'absolute',
                                         top: 28,
                                         left: 15,
                                         fontSize: 18,
                                         fontWeight: "bold",
                                         shadowColor: "#000",
                                         shadowOffset: {
                                             width: 0,
                                             height: 5,
                                         },
                                         shadowOpacity: 0.25,
                                         shadowRadius: 3.84,
                                         elevation: 5,
                                     },
                                     filterContainer: {
                                         position: 'absolute',
                                         top: 135,
                                         marginStart: 0,
                                         marginBottom: 10,
                                         alignSelf: "center",
                                         flexDirection: "row",
                                         justifyContent: "space-between",
                                         zIndex: 1,

                                     },
                                     mapVersionButton: {
                                         position: 'absolute',
                                         top: 28,
                                         right: 15
                                     },
                                     scrollContainer: {
                                         paddingRight: 21,
                                         paddingLeft: 21
                                     }
                                 });

export default styles;
