import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
                                     container: {
                                         width: "100%",
                                         height: 280,
                                         alignItems: 'center',
                                         backgroundColor: 'white',
                                         borderWidth: 1,
                                         borderColor: '#F2F2F2',
                                         borderRadius: 8,
                                         padding: 25,
                                         marginVertical: 8
                                     },
                                     photo: {
                                         position: "absolute",
                                         top: 26,
                                         left: 34,
                                     },
                                     name: {
                                         marginStart: 110,
                                         alignSelf: "flex-start"
                                     },
                                     address: {
                                         marginStart: 110,
                                         alignSelf: "flex-start"

                                     },
                                     locationIcon: {
                                         flexDirection: "row",
                                         marginStart: 105,
                                         alignSelf: "flex-start"
                                     },
                                     distance: {
                                         paddingTop: 2,
                                         fontWeight: "bold"
                                     },
                                     ratingContainer: {
                                         paddingTop: 3,
                                         width: 120,
                                         marginStart: 110,
                                         alignSelf: "flex-start",
                                         flexDirection: "row",
                                     },
                                     noOfReviews: {
                                         paddingStart: 2,
                                         fontWeight: "bold"
                                     },
                                     innerContainer: {
                                         position: "absolute",
                                         top: 145,
                                         left: 30,
                                         width: '100%',
                                         borderWidth: 1,
                                         borderRadius: 8,
                                         padding: 15,
                                         margin: 0,
                                         borderColor: "#F2F2F2"
                                     },
                                     innerContainerRow: {
                                         flexDirection: "row",
                                         marginBottom: 8,
                                     },
                                     innerContainerIcon: {
                                         marginHorizontal: 5
                                     },
                                     innerContainerText: {
                                         paddingTop: 5,
                                         marginStart: 15,
                                         marginEnd: 100
                                     },
                                     mapsButton: {
                                         position: "absolute",
                                         top: 40,
                                         margin: 0,
                                         right: 10,
                                         width: 60,
                                         backgroundColor: "#1A3B6B",
                                         padding: 5,
                                         borderRadius: 3
                                     },
                                     mapText: {
                                         color: "white",
                                         fontWeight: "bold",
                                         alignSelf: "center"

                                     }
                                 });
export default styles;