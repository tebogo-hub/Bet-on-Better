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
            <View style={styles.topContainer}>
            </View>
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
            <Text style={styles.textbottom}>
                By helping a soul, together we can change the world.
            </Text>
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
        width: '317px',
        height: '35px',
        left: 29,
        top: 90,
        backgroundColor: '#E5E5E5',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        outline: 'none',
        borderRadius: '16px',
        paddingLeft: '5%',
    },

    scrollcontainer: {
        position: 'absolute',
        width: '375px',
        height: '141px',
        left: 0,
        top: 557,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        // boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',


    },
    cardContainer: {
        position: 'absolute',
        width: '207px',
        height: '119px',
        left: 8,
        top: 10,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px'
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
    textbottom:{
        position: 'absolute',
        width:'350px',
        height: '14px',
        left: '17px',
        top: '700px',
        fontFamily: 'arial',
        fontstyle: 'normal',
        fontweight: '900px',
        fontsize:'14px',
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
})

