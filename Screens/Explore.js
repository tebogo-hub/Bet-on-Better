import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Linking } from 'react-native';
import { firebase } from '../config/firebase';


export default function Explore({ navigation}) {

    const TriggerMail = () => {
        Linking.openURL('mailto:teejaymellowgrind@gmail.com',)
    }
    const [campList, setCampList] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('Campaign').get().then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({

                id: doc.id,
                ...doc.data(),
            }));
            console.log(data)
            setCampList(data)
        });

    }, [])




    return (

        <SafeAreaView style={styles.container}>
            <Text style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginTop: '10px', color: '#ffac2c' }}>Campaign</Text>

            {campList.map((data) => (
                <View style={styles.Card1}>
                    <Text style={{ marginTop: '5px', marginLeft: '10px', fontSize: '12px', fontWeight: '500', color: 'rgba(184, 129, 207, 1)' }}>{data.campName}</Text>

                    <Text style={{ marginTop: '10px', marginLeft: '10px', fontSize: '9px', fontWeight: '500' }}>
                        {data.campDescription}
                    </Text>
                    <Text style={{ marginTop: '10px', marginLeft: '10px', fontSize: 'normal', fontWeight: '500' }}>Donating to Foundation for kids to receive</Text>
                    <Text style={{ marginTop: '5px', marginLeft: '10px', fontSize: '12px', fontWeight: 'normal' }}>{data.campType}</Text>

                    <View style={{ display: 'flex', flexDirection: 'column', }}>
                        <Text style={{ marginTop: '5px', marginLeft: '10px', fontSize: '12px', fontWeight: 'normal' }}>Email to : {data.campEmail}</Text>
                        <Text style={{ marginTop: '5px', marginLeft: '10px', fontSize: '12px', fontWeight: 'normal' }}>Conatct : {data.campPhone}</Text>
                    </View>

                    <TouchableOpacity style={{ marginTop: '10px', marginLeft: '10px', fontSize: '12px', fontWeight: 'normal', backgroundColor: '#ffac2c', marginRight: '10px', borderRadius: '5px', height: '21px' }}><Text style={{ color: 'white', textAlign: 'center', }} onPress={TriggerMail}>Email</Text></TouchableOpacity>
                </View >

            ))}
            <View style={{ position: 'fixed', backgroundColor: 'rgba(15, 16, 17, 0.37)', width: '375px', height: '55px', left: '0px', top: '95%', }}>
                <TouchableOpacity style={{ marginTop: '5px', marginLeft: '10px', backgroundColor: '#ffac2c', boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)' ,marginRight:'10px',borderRadius: '14px', }} onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: 'white', textAlign:'center' }}>Back</Text>
                </TouchableOpacity>
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
    Card1: {
        position: 'relative',
        width: "341px",
        height: "200px",
        left: "15px",
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
        borderRadius: '14px',
        boxSizing: "border-box",
        top: "45px",
    },
    Card2: {
        position: 'relative',
        width: "341px",
        height: "200px",
        left: "15px",
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px',
        boxSizing: "border-box",
        top: "65px",

    }


})
