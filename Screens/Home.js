import React, { useEffect, useState } from 'react'
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'


import { firebase } from '../config/firebase';
export default function Home({ navigation }) {


    const [ngosList, setngosList] = useState([])

    useEffect(() => {
        firebase.firestore().collection('ngos').get().then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({

                id: doc.id,
                ...doc.data(),
            }));

            console.log(data)
            setngosList(data)
        });

    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground style={styles.bannersContainer} source={require('../assets/Background/run.jpg')}>
                <Text style={styles.Bet}>Bet</Text><Text style={styles.on}>on</Text>
                <Text style={styles.better}>Better</Text>
                <Text style={styles.BannerContent}>
                    Help affected families by sharing whatever you think its not of use.
                </Text>
            </ImageBackground>
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={false}
                bounces={false}
                style={styles.scrollcontainer}

            >

                <View style={{ flexDirection: 'row' }}>

                    {ngosList.map((data) => (
                        <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Popup', data)}>
                            <ImageBackground style={styles.imageContainer} source={require('../assets/Background/children.jpg')} />
                            <Text style={styles.headerText}>{data.orgName}</Text>
                            <Text style={styles.contentText}>{data.orgDescription.substring(0, 55)}.....</Text>
                        </TouchableOpacity>
                    ))}
                    {ngosList.map((data) => (
                        <TouchableOpacity style={styles.cardContainer2} onPress={() => navigation.navigate('Popup', data)}>
                            <ImageBackground style={styles.imageContainer} source={require('../assets/Background/children-2.jpg')} />
                            <Text style={styles.headerText}>{data.orgName}</Text>
                            <Text style={styles.contentText}>{data.orgDescription.substring(0, 55)}....</Text>
                        </TouchableOpacity>
                    ))}

                </View>
            </ScrollView>
            <View style={{
                position: 'relative',
                width: '355px',
                height: '110px',
                left: '10px',
                top: '75%',
                backgroundColor: 'white',
                boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
                borderRadius: '14px',
                borderColor: '1px solid rgba(94, 206, 253, 1)',
            }}>
                <View>
                    <Text style={{ marginTop: '5px', marginLeft: '10px', fontSize: '12px', fontWeight: '500',  color: 'rgba(184, 129, 207, 1)',}}>New Campaigns</Text>
                    <Text style={{ marginTop: '5px', marginLeft: '10px', fontSize: '9px', fontWeight: '500' ,color: '#ffac2c'}}>
                        An NGO’s primary goal is to uplift society and raise awareness about a serious cause.
                        Community engagement is arguably PR in literal form. Any campaign run by an NGO affects a community directly and indirectly.
                        As a PR manager or campaign leader, you need to evaluate your internal communication strategy.
                    </Text>
                    <TouchableOpacity style={{ marginTop: '5px', marginLeft: '10px' }} onPress={() => navigation.navigate('Explore')}><Text style={styles.ExploreText2}>View now..</Text></TouchableOpacity>
                </View>
            </View>
            <View style={{ position: 'fixed', backgroundColor: 'rgba(15, 16, 17, 0.37)', width: '375px', height: '55px', left: '0px', top: '95%', }}>
                <Ionicons name="gift-sharp" size={24} color="#ffac2c" style={{ marginTop: '1px', textAlign: 'center'}}/>
                <Text style={{ marginTop: '0px', textAlign: 'center', color: 'white', fontSize: '9px', fontWeight: '500'}} onPress={() => navigation.navigate('Gift')}>Click me to send Gift</Text>

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
        backgroundColor: 'white'
    },
    bannersContainer: {
        position: "absolute",
        width: "375px",
        height: "440px",
        left: "0px",
        top: "0px",
    },
    NearestText: {
        position: 'absolute',
        left: "20px",
        top: "440px",
        fontFamilyt: 'arial',
        fontWeight: 'normal',
        fontSize: "12px",
        lineHeight: "14px",
        color: 'rgba(94, 206, 253, 1)'
    },
    Bet: {
        position: 'absolute',
        left: "6px",
        top: "375px",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "14px",
        lineHeight: "16px",
        color: 'rgba(94, 206, 253, 1)',
    },
    on: {
        position: 'absolute',
        left: "30px",
        top: "375px",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "14px",
        lineHeight: "16px",
        color: 'rgba(184, 129, 207, 1)',
    },
    better: {
        position: 'absolute',
        left: "6px",
        top: "390px",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "14px",
        lineHeight: "16px",
        color: 'rgba(94, 206, 253, 1)',
    },
    BannerContent: {
        position: 'absolute',
        left: "6px",
        top: "415px",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "9px",
        lineHeight: "16px",
        color: '#ffffff'
    },
    icon: {
        position: 'absolute',
        left: "20px",
        top: "10px",
    },
    topContainer: {
        position: 'absolute',
        width: '375px',
        height: '133px',
        backgroundColor: 'rgba(184, 129, 207, 1)',
        boxshadow: '0px 4px 4px rgba(0,0,0, 0.2)',
    },
    scrollcontainer: {
        position: 'absolute',
        height: '141px',
        top: "450px",
        width: '375px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    scrollcontainer2: {
        position: 'absolute',
        height: '141px',
        top: "377px",
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    cardContainer: {
        position: 'absolute',
        width: '207px',
        height: '125px',
        left: "8px",
        top: "10px",
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
        borderRadius: '14px',
        borderColor: 'rgba(94, 206, 253, 1)'
    },
    cardContainer2: {
        position: 'relative',
        width: '207px',
        height: '125px',
        left: '230px',
        top: "10px",
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
        borderRadius: '14px',
        borderColor: '1px solid rgba(94, 206, 253, 1)'
    },
    imageContainer: {
        position: 'absolute',
        width: '77px',
        height: '67px',
        left: '10px',
        top: '5px',
        backgroundColor: 'gray',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
        borderRadius: '5px'
    },
    headerText: {
        position: 'absolute',
        height: '16px',
        left: '100px',
        top: '5px',
        fontStyle: 'normal',
        fontWeight: "500px",
        fontSize: "9px",
        lineHeight: "16px",
        color: 'rgba(184, 129, 207, 1)',
    },
    contentText: {
        position: 'absolute',
        width: '100px',
        left: '100px',
        top: '20px',
        fontStyle: 'normal',
        fontWeight: "500px",
        fontSize: "11px",
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
        width: "341px",
        height: "93px",
        left: "15px",
        border: "1px solid rgba(184, 129, 207, 1)",
        boxSizing: "border-box",
        borderRadius: "10px",
        top: "635px",
    },
    GiftContainer2: {
        position: 'relative',
        width: "341px",
        height: "99px",
        left: "15px",
        border: "1px solid rgba(184, 129, 207, 1)",
        boxSizing: "border-box",
        borderRadius: "10px",
        top: "640px",
    },




})

