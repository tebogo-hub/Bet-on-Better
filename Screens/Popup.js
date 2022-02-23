import React from 'react'
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, } from 'react-native'
import getDirections from 'react-native-google-maps-directions'


function Popup({ navigation, route }) {
    const myData = route.params
    const handleGetDirections = () => {
        const data = {
            source: {
                latitude: -33.8356372,
                longitude: 18.6947617,
            },
            destination: {
                latitude: -33.8600024,
                longitude: 18.697459
            },
            params: [
                {
                    key: "travelmode",
                    value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ],
            waypoints: [
                {
                    latitude: -33.8600025,
                    longitude: 18.697452
                },
                {
                    latitude: -33.8600026,
                    longitude: 18.697453
                },
                {
                    latitude: -33.8600036,
                    longitude: 18.697493
                }
            ]
        }

        getDirections(data)
    }

    return (

        <SafeAreaView style={styles.Container}>
            <ScrollView style={styles.ImageScrollView}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                pagingEnabled={false}
                bounces={false}
            >
                <ImageBackground style={styles.imageContainer} source={require('../assets/Background/children.jpg')}></ImageBackground>
                <ImageBackground style={styles.imageContainer2} source={require('../assets/Background/girl.jpg')}></ImageBackground>
                <ImageBackground style={styles.imageContainer3} source={require('../assets/Background/hope.png')}></ImageBackground>
            </ScrollView>

            <Text style={styles.subheading}>{myData.orgName}</Text>
            <Text style={styles.contentText}>{myData.orgDescription}</Text>
            <Text style={styles.oldPhoneNumber}>{myData.orgPhone}</Text>
            <Text style={styles.Email}>{myData.orgEmail}</Text>
            <Text style={styles.City}>{myData.orgCity}</Text>
            <Text style={styles.Code}>{myData.orgZip}</Text>

            <View style={styles.iconContainer}>
                <Text style={styles.text}>Location</Text>
            </View>
            <Text style={styles.Locationtext}>{myData.orgAddress}</Text>
            <Text style={styles.Text1}>Adout us</Text>
            <Text style={styles.About}>
                {myData.orgAbout}
            </Text>

            <TouchableOpacity onPress={handleGetDirections}>
                <Text style={{ position: "absolute", left: "15px", top: "670px" }} >Directions</Text>
            </TouchableOpacity>

            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate('Donate')}>
                    <Text style={styles.touchable}>View now</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
export default Popup
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        width: '375px',
        height: '812px',
        backgroundColor: 'white'
    },
    City: {
        position: 'absolute',
        left: '15px',
        top: '435px',
        fontSize: '11px',
    },
    Code: {
        position: 'absolute',
        left: '15px',
        top: '445px',
        fontSize: '11px',
    },
    ImageScrollView: {
        position: 'absolute',
        width: '375px',
        height: '240px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        display: 'flex',
        flexDirection: 'row',
    },
    Email: {
        position: 'absolute',
        left: '15px',
        top: '335px',
        fontSize: '11px',
        color: 'rgba(184, 129, 207, 1)',
    },
    volumeControl: {
        position: 'absolute',
        top: '370px',
        left: '24px',
    },
    oldPhoneNumber: {
        color: 'rgba(184, 129, 207, 1)',
        position: 'absolute',
        left: ' 15px',
        top: '355px',
        fontSize: '11px',
        fontWeight: '500px',
    },
    imageContainer: {
        position: 'absolute',
        width: '350px',
        height: '207px',
        left: '0px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        top: '20px',
        marginLeft: '10px'
    },
    imageContainer2: {
        position: 'absolute',
        width: '350px',
        height: '207px',
        left: '377px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        top: '20px',
    },
    imageContainer3: {
        position: 'absolute',
        width: '350px',
        height: '207px',
        left: '750px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        top: '20px',
    },
    subheading: {
        position: 'absolute',
        left: '15px',
        top: '250px',
        fontweight: '500px',
        fontSize: '11px',
        lineHeight: '15px',
        color: '#ffac2c',
    },
    contentText: {
        position: 'absolute',
        width: '334px',
        height: '28px',
        left: '15px',
        top: '270px',
        fontStyle: 'normal',
        fontSize: '10px',
        lineHeight: '14px',
        fontWeight: '500px',
    },
    iconlocation: {
        position: 'absolute',
        left: '15px',
        top: '400px',
        color: '#ffac2c',
    },
    text: {
        position: 'absolute',
        width: '100px',
        height: '15px',
        left: '15px',
        top: 380,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 11,
        lineHeight: '15px',
        color: 'rgba(94, 206, 253, 1)'
    },
    Locationtext: {
        position: 'absolute',
        width: '143px',
        height: '60px',
        left: 15,
        top: 400,
        fontStyle: 'normal',
        fontSize: 9,
        fontWeight: 500,
    },
    Text1: {
        position: 'absolute',
        left: 15,
        top: 474,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 14,
    },
    Text2: {
        position: 'absolute',
        left: 15,
        top: 490,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 9,
        lineHeight: 25,
    },
    Text3: {
        position: 'absolute',
        left: 83,
        top: 490,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 9,
        lineHeight: 25,
    },
    Text4: {
        position: 'absolute',
        left: 143,
        top: 490,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 9,
        lineHeight: 25,
    },
    Text5: {
        position: 'absolute',
        left: 203,
        top: 490,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 9,
        lineHeight: 25,
    },
    text2: {
        position: 'absolute',
        width: '100px',
        height: '15px',
        top: '550px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 11,
        lineHeight: '15px',
        color: 'rgba(94, 206, 253, 1)',
        left: 15,
    },
    Locationtext2: {
        position: 'absolute',
        width: '143px',
        height: '60px',
        left: 15,
        top: '575px',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 11,
    },
    touchableOpacity: {
        position: 'absolute',
        width: 334,
        height: 40,
        left: 23,
        top: '725px',
        backgroundColor: '#ffac2c',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
    },
    touchable: {
        position: 'absolute',
        width: '100px',
        height: '14px',
        left: 135,
        top: 8,
        fontStyle: 'normal',
        fontsize: 12,
        lineHeight: 25,
        color: 'white'
    },
    About: {
        position: 'absolute',
        width: '334px',
        height: '28px',
        left: '15px',
        top: '500px',
        fontStyle: 'normal',
        fontSize: '10px',
        lineHeight: '14px',
        fontWeight: '500px',
    }


})
