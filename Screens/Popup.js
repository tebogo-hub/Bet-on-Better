import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Image, Button } from 'react-native'

function Popup() {
    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView style={styles.ImageScrollView}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                pagingEnabled={true}
            >
                <ImageBackground style={styles.imageContainer} source={require('../assets/Background/children.jpg')}></ImageBackground>
                <ImageBackground style={styles.imageContainer2} source={require('../assets/Background/girl.jpg')}></ImageBackground>
                <ImageBackground style={styles.imageContainer3} source={require('../assets/Background/hope.png')}></ImageBackground>
            </ScrollView>
            {/* <View>
                <Text style={styles.Heading}>Discription</Text>
            </View> */}
            <Text style={styles.subheading}>Giving Hope</Text>
            <Text style={styles.contentText}>
                Giving hope to the hopeless and together we can build
                a better tomorrow and a better future.
            </Text>
            <View style={styles.iconContainer}>
                <View><Ionicons name="md-location-outline" size={24} style={styles.iconlocation} /></View>
                <View>
                    <Text style={styles.text}>Start Location</Text>
                </View>
            </View>
            <Text style={styles.Locationtext}>
                18422 Forest View street
                Kutlwanong club 2000
                Kimberley
                8345
            </Text>
            <Text style={styles.Distance}>Distance</Text>
            <Text style={styles.Distancekml}>5km/h</Text>

            <View style={styles.iconContainer}>
                <View style={styles.iconlocation2}>

                </View>
                <View>
                    <Text style={styles.text2}>Finish Location</Text>
                </View>
                <Text style={styles.Locationtext2}>
                    18422 Forest View street
                    Kutlwanong club 2000
                    Kimberley
                    8345
                </Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text style={styles.touchable}>View</Text>
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
    },
    ImageScrollView: {
        position: 'absolute',
        width: '375px',
        height: '248px',
        left: 0,
        backgroundColor: 'rgba(144, 106, 187, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        display: 'flex',
        flexDirection: 'row',
        display: 'flex',
        flexDirection: 'row',
    },
    imageContainer: {
        position: 'absolute',
        width: '350px',
        height: '207px',
        left: 0,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        top: 20,
        marginLeft: '10px'
    },
    imageContainer2: {
        position: 'absolute',
        width: '350px',
        height: '207px',
        left: '377px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        top: 20,

    },
    imageContainer3: {
        position: 'absolute',
        width: '350px',
        height: '207px',
        left: '750px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        top: 20,
    },
    Heading: {
        position: 'absolute',
        width: '100px',
        height: '21px',
        left: '44px',
        top: '275px',
        fontFamily: 'arial',
        fontweight: 900,
        fontStyle: 'normal',
        fontsize: '24px',
        lineHeight: '21px',
    },
    subheading: {
        position: 'absolute',
        height: '15px',
        left: '44px',
        top: '320px',
        fontFamily: 'arial',
        fontweight: '1000',
        fontsize: '18px',
        lineHeight: '15px',
        color: 'rgba(144, 106, 187, 1)',
    },
    contentText: {
        position: 'absolute',
        width: '334px',
        height: '28px',
        left: '44px',
        top: '350px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontweight: 'bold',
        fontsize: '12px',
        lineHeight: '14px',
    },
    iconlocation: {
        position: 'absolute',
        width: '25px',
        height: '25px',
        left: '19px',
        top: '400px',
        color: 'rgba(144, 106, 187, 1)',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        position: 'absolute',
        width: '100px',
        height: '15px',
        left: '44px',
        top: '408px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '13px',
        lineHeight: '15px',
        color: 'rgba(94, 206, 253, 1)'
    },
    Locationtext: {
        position: 'absolute',
        width: '143px',
        height: '60px',
        left: '44px',
        top: '430px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '500px',
       
    },
    Distance: {
        position: 'absolute',
        width: '60px',
        height: '16px',
        left: '44px',
        top: '500px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '16px',
        color: 'rgba(94, 206, 253, 1)',
    },
    Distancekml: {
        color: 'black',
        position: 'absolute',
        width: '35px',
        height: '14px',
        left: '44px',
        top: '519px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '12px',
        lineHeight: '14px',
    },
    iconlocation2: {

    },
    text2: {
        position: 'absolute',
        width: '100px',
        height: '15px',
        top: '550px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '13px',
        lineHeight: '15px',
        color: 'rgba(94, 206, 253, 1)',
        left: '44px',
    },
    Locationtext2: {
        position: 'absolute',
        width: '143px',
        height: '60px',
        left: '44px',
        top: '575px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'normal',

    },
    touchableOpacity: {
        position: 'absolute',
        width: '292px',
        height: '20px',
        left:'44px',
        top: '675px',
        backgroundColor: 'rgba(144, 106, 187, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius:'16px',
    },
    touchable:{
        position: 'absolute',
        width: '100px',
        height: '14px',
        left: '125px',
        top: '1.5px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight:'bold',
        fontsize:12,
        lineHeight:14,
        color: 'white'
    }

})
