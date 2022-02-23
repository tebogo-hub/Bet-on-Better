import React, { useState } from 'react';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View } from 'react-native'

export default function Gift({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ textAlign: 'center', fontSize: '18px', fontWeight: '500', marginTop: '25px', color: '#ffac2c' }}>Pick a Gift</Text>

            <TouchableOpacity style={{
                position: 'relative',
                width: "341px",
                height: "120px",
                left: "15px",
                boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
                borderRadius: '14px',
                boxSizing: "border-box",
                top: "100px",
                backgroundColor: 'white',
                color: 'white'
            }} onPress={() => navigation.navigate('ContactForm')}>
                <View style={{
                    position: 'absolute',
                    width: '77px',
                    height: '67px',
                    left: '10px',
                    top: '25px',
                    backgroundColor: '#ffac2c',
                    boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
                    borderRadius: '5px'
                }}>
                    <FontAwesome5 name="gifts" size={24} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                </View>
                <Text style={{ marginTop: '25px', marginLeft: '10px', textAlign: 'center', fontSize: '12px', fontWeight: '500', color: 'rgba(184, 129, 207, 1)'}}>Select gift for christmas</Text>
                <Text style={{ fontSize: '8px', marginLeft: '30%', fontWeight: '500', }}>
                    Christmas is one of the most joyous festivals of the year, awaited by everyone,
                    including children and grown-ups. The glittery decoration, gifts, cakes,
                    delicious meals, Christmas carols, everything about the festival is just splendid.
                    But above all it's about the love, laughter and the precious time spent with the family and the loved ones.
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                position: 'relative',
                width: "341px",
                height: "120px",
                left: "15px",
                boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
                borderRadius: '14px',
                boxSizing: "border-box",
                top: "125px",
                backgroundColor: 'white',
                color: 'white'
            }} onPress={() => navigation.navigate('ContactForm')}>
                <View style={{
                    position: 'absolute',
                    width: '77px',
                    height: '67px',
                    left: '10px',
                    top: '25px',
                    backgroundColor: '#ffac2c',
                    boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
                    borderRadius: '5px'
                }}>
                    <MaterialCommunityIcons name="egg-easter" size={30} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                </View>
                <Text style={{ marginTop: '25px', marginLeft: '10px', textAlign: 'center', fontSize: '12px', fontWeight: '500', color: 'rgba(184, 129, 207, 1)' }}>Select gift for Easter</Text>
                <Text style={{ fontSize: '7px', marginLeft: '30%', fontWeight: '500', }}>
                    Easter is just around the corner,
                    bringing with it some of our favorite things about the approaching season: bountiful brunch recipes, Easter Bible verses,
                    and the chance to gather with beloved friends and family members. But what can you do to share the joy further?
                    Here,
                    we've compiled the best Easter wishes and messages so that you can spread the meaning and beauty of the holiday to all your friends and family members.
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                position: 'relative',
                width: "341px",
                height: "120px",
                left: "15px",
                boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
                borderRadius: '14px',
                boxSizing: "border-box",
                top: "150px",
                backgroundColor: 'white',
                color: 'white'
            }} onPress={() => navigation.navigate('ContactForm')}>
                <View style={{
                    position: 'absolute',
                    width: '77px',
                    height: '67px',
                    left: '10px',
                    top: '25px',
                    backgroundColor: '#ffac2c',
                    boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
                    borderRadius: '5px'
                }}>
                    <FontAwesome5 name="church" size={30} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                </View>
                <Text style={{ marginTop: '25px', marginLeft: '10px', textAlign: 'center', fontSize: '12px', fontWeight: '500', color: 'rgba(184, 129, 207, 1)' }}>Select gift for Religion</Text>
                <Text style={{ fontSize: '7px', marginLeft: '30%', fontWeight: '500', }}>
                    Religious motivation is a measure of the place religion has in an individual's life and gives a perspective on how religion is used to interact both with one's internal and external life. The measure of religious motivation introduced contains three subscales—extrinsic, intrinsic, and quest
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                position: 'relative',
                width: "341px",
                height: "120px",
                left: "15px",
                boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
                borderRadius: '14px',
                boxSizing: "border-box",
                top: "170px",
                backgroundColor: 'white',
                color: 'white'
            }} onPress={() => navigation.navigate('ContactForm')}>
                <View style={{
                    position: 'absolute',
                    width: '77px',
                    height: '67px',
                    left: '10px',
                    top: '25px',
                    backgroundColor: '#ffac2c',
                    boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
                    borderRadius: '5px'
                }}>
                    <FontAwesome5 name="donate" size={30} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                </View>
                <Text style={{ marginTop: '25px', marginLeft: '10px', textAlign: 'center', fontSize: '12px', fontWeight: '500', color: 'rgba(184, 129, 207, 1)' }}>Select gift for Donating</Text>
                <Text style={{ fontSize: '7px', marginLeft: '30%', fontWeight: '500', }}>
                    Religious motivation is a measure of the place religion has in an individual's life and gives a perspective on how religion is used to interact both with one's internal and external life. The measure of religious motivation introduced contains three subscales—extrinsic, intrinsic, and quest
                </Text>
            </TouchableOpacity>


            <View style={{ position: 'fixed', backgroundColor: 'rgba(15, 16, 17, 0.37)', width: '375px', height: '55px', left: '0px', top: '95%', }}>
                <TouchableOpacity style={{ marginTop: '5px', marginLeft: '10px', backgroundColor: '#ffac2c', boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)', marginRight: '10px', borderRadius: '14px', }} onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Back</Text>
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
        backgroundColor: 'white',
    },


})