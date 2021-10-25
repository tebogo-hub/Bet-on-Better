import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Image, Button } from 'react-native'
import Map from '../auth/Components/Map';
export default function Home({ navigation }) {
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition(success => {
        let { latitude, longitude } = success.coords;
        lat = latitude;
        lon = longitude;

    })
    return (
        <SafeAreaView style={styles.container}>

            <TextInput
                placeholder="Search"
                style={styles.searchbar}
            />
            <Map />
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                style={styles.scrollcontainer}
            >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Popup')}>
                        <ImageBackground style={styles.imageContainer} source={require('../assets/Background/Children.jpg')} />
                        <Text style={styles.headerText}>Giving Hope</Text>
                        <Text style={styles.contentText}>
                            Giving hope to the hopeless.
                            together we can give hope and help a soul for better tomorrow.
                        </Text>


                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardContainer2} onPress={() => navigation.navigate('Popup')}>
                        <ImageBackground style={styles.imageContainer} source={require('../assets/Background/girl.jpg')} />
                        <Text style={styles.headerText}>Bet on Better</Text>
                        <Text style={styles.contentText}>
                            Giving hope to the hopeless.
                            together we can give hope and help a soul for better tomorrow.
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardContainer3} onPress={() => navigation.navigate('Popup')}>
                        <ImageBackground style={styles.imageContainer} source={require('../assets/Background/Children-2.jpg')} />
                        <Text style={styles.headerText}>Bet on Better</Text>
                        <Text style={styles.contentText}>
                            Giving hope to the hopeless.
                            together we can give hope and help a soul for better tomorrow.
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <Text style={styles.GiftText}>Gift offering</Text>
            <View style={styles.GiftContainer}>
                <View style={styles.Box1}>
                    <Text style={styles.ContentText1}>
                        Looking for the perfect git?
                    </Text>
                    <TouchableOpacity style={styles.Btn1}>
                        <Text style={styles.SendText}>Send a gift</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Text style={styles.ExploreText}>Explore</Text>
            <View style={styles.GiftContainer2}>
                <View style={styles.Box2}>
                    <Text style={styles.ContentText1}>
                        Change lives every
                        month with The Table
                    </Text>
                    <TouchableOpacity style={styles.Btn2}>
                        <Text style={styles.ExploreText2}>Explore</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        width: '375px',
        height: '812px',
    },
    topContainer: {
        position: 'absolute',
        width: '375px',
        height: '133px',
        backgroundColor: 'rgba(184, 129, 207, 1)',
        boxshadow: '0px 4px 4px rgba(0,0,0, 0.25)',
    },
    searchbar: {
        position: 'absolute',
        width: '359px',
        height: '40px',
        left: 9,
        top: 69,
        backgroundColor: 'white',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        outline: 'none',
        borderRadius: '16px',
        paddingLeft: '5%',
    },

    scrollcontainer: {
        position: 'absolute',
        height: '141px',
        left: 0,
        top: 387,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    cardContainer: {
        position: 'absolute',
        width: '207px',
        height: '119px',
        left: 8,
        top: 10,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px',
        borderColor: 'rgba(94, 206, 253, 1)'
    },
    cardContainer2: {
        position: 'relative',
        width: '207px',
        height: '119px',
        left: '230px',
        top: 10,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px',
        borderColor: '1px solid rgba(94, 206, 253, 1)'

    },
    cardContainer3: {
        position: 'relative',
        width: '207px',
        height: '119px',
        left: '245px',
        top: 10,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px'
    },
    imageContainer: {
        position: 'absolute',
        width: '77px',
        height: '67px',
        left: '10px',
        top: '5px',
        backgroundColor: 'gray',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '5px'
    },
    headerText: {
        position: 'absolute',
        height: '16px',
        left: '100px',
        top: '5px',
        fontFamily: 'arial black ',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '14px',
        lineHeight: '16px',
        color: 'rgba(63, 131, 224, 1)'
    },
    contentText: {
        position: 'absolute',
        width: '100px',
        left: '100px',
        top: '25px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '11px',
        color: 'rgba(0, 0, 0, 0.74)',
    },
    textbottom: {
        position: 'absolute',
        width: '350px',
        height: '14px',
        left: '17px',
        top: '700px',
        fontFamily: 'arial',
        fontstyle: 'normal',
        fontweight: '900px',
        fontsize: '14px',
        color: 'rgba(94, 206, 253, 1)',
    },
    buttonView: {
        position: "absolute",
        width: '164px',
        height: '15px',
        left: '24px',
        top: '100px',
        backgroundColor: 'rgba(94, 206, 253, 1)',
        borderRadius: '10px',
    },
    view: {
        position: 'absolute',
        width: '29px',
        height: '15px',
        left: '75px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '15px',
        color: 'white',
    },
    GiftContainer: {
        position: 'relative',
        width: '359px',
        height: '100px',
        left: 10,
        top: 545,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px',
    },
    GiftContainer2: {
        position: 'relative',
        width: '359px',
        height: '100px',
        left: 10,
        top: 565,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px',
    },
    GiftText: {
        position: 'absolute',
        left: 20,
        top: 529,
        fontFamilyt: 'arial',
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 14,
    },
    ExploreText: {
        position: 'absolute',
        left: 20,
        top: 650,
        fontFamilyt: 'arial',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 14,
        fontweight: 900,
    },
    Box1: {
        position: 'absolute',
        width: 86,
        height: 74,
        left: 15,
        top: 10,
        backgroundColor: '#ffffff',
        border: '1px solid #8881CF',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
    },
    Box2: {
        position: 'absolute',
        width: 86,
        height: 74,
        left: 15,
        top: 16,
        backgroundColor: '#ffffff',
        border: '1px solid #8881CF',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
    },
    Btn1: {
        position: 'absolute',
        width: 235,
        height: 35,
        left: 100,
        top: 37,
        backgroundColor: '#B881CF',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
    },
    SendText: {
        position: 'absolute',
        left: 80,
        top: 7,
        color: '#FFFFFF',
    },
    Btn2: {
        position: 'absolute',
        width: 235,
        height: 35,
        left: 100,
        top: 37,
        backgroundColor: '#B881CF',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
    },
    ExploreText2: {
        position: 'absolute',
        position: 'absolute',
        left: 80,
        top: 7,
        color: '#FFFFFF',
    },
    ContentText1: {
        position: 'absolute',
        width: 200,
        left: 110,
        top: 0,
        fontFamily: 'arial',
        fontSize: 'normal',
        fontWeight: '500px',
        fontsize: 5,
        lineHeight: 15,
        color: 'rgba(0,0,0,0.63)',


    }




})

