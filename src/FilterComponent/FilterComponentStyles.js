import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
                                     scrollContainer: {
                                         paddingRight: 21,
                                         paddingLeft: 21
                                     },
                                     filterContainer: {
                                         position: 'absolute',
                                         top: 97,
                                         alignSelf: "center",
                                         flexDirection: "row",
                                         justifyContent: "space-between",
                                         zIndex: 1,

                                     },
                                     filterButton: {
                                         backgroundColor: '#EBEBEB',
                                         borderColor: '#4f4e4e',
                                         borderWidth: 1,
                                         borderRadius: 10,
                                         padding: 5,
                                         paddingLeft: 10,
                                         paddingRight: 10,
                                         marginRight: 11,
                                     },
                                     filterText: {
                                         fontSize: 16,
                                         opacity: 1
                                     },
                                     pickerContainer: {
                                         backgroundColor: 'white',
                                         borderColor: 'black',
                                         borderWidth: 1,
                                         borderRadius: 10,
                                         marginRight: 11,
                                     },
                                     pickerStyle: {
                                         backgroundColor: '#EBEBEB',
                                         height: 30,
                                         width: 100,
                                         borderRadius: 10,
                                         flexDirection: "row",
                                         justifyContent: "space-evenly"
                                     },
                                 });

export default styles;
