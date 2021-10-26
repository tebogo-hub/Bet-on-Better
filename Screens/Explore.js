import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Image, Button } from 'react-native'


export default function Explore({ Navigaton }) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={require('../assets/Background/backChild.jpg')} />
            <Text style={styles.Bet}>Bet</Text><Text style={styles.on}>on</Text>
            <Text style={styles.better}>Better</Text>
            <Text style={styles.contentText}>
                Help affected families by sharing whatever
                you think its not of use.
            </Text>
            <Text style={styles.contentText2}>Our Impact</Text>
            <View style={styles.worldmapConatiner}>
                <ImageBackground style={styles.worldMap} source={require('../assets/Background/world-map.svg')} />
            </View>
            <Text style={styles.supportText}>500 164 Supporters</Text>
            <View style={styles.line}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        width: '375px',
        height: '812px',
    },
    imageBackground: {
        position: 'absolute',
        width: 375,
        height: 417,
        left: 0,
        top: 0,
    },
    Bet: {
        position: 'absolute',
        color: 'rgba(94, 206, 253, 1)',
        height: '16px',
        left: 12,
        top: '331px',
        fontFamily: 'arial black',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: '14px',
        lineHeight: '42px',
    },
    on: {
        position: 'absolute',
        // width: '41px',
        height: '16px',
        left: '40px',
        top: '331px',
        fontFamily: 'arial black',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: '14px',
        lineHeight: '42px',
        color: 'rgba(184, 129, 207, 1)',
    },
    better: {
        position: 'absolute',
        color: 'rgba(184, 129, 207, 1)',
        height: '16px',
        left: 12,
        top: '344px',
        fontFamily: 'arial black',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: '14px',
        lineHeight: '42px',
    },
    contentText: {
        position: 'absolute',
        left: 12,
        top: 375,
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: 14,
        lineHeight: 16,
        color: 'white',
    },
    contentText2: {
        position: 'absolute',
        left: 14,
        top: 415,
        fontFamily: 'arial black',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '12px',
        lineHeight: '42px',
        color: 'black',
    },
    worldMap: {
        position: 'absolute',
        width: 348,
        height: 147,
        left: 13,
        top: 450,
        borderRadius: 10,
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        backgroundColor: 'white'
    },
    supportText: {
        position: 'absolute',
        left: 14,
        top:610,
        fontFamily: 'arial black',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '14px',
        lineHeight: '20px',
        color: 'black',
    },
    line:{
        position: 'absolute',
        width:346.05,
        height:0,
        left:14,
        top:637,
        border:'2px solid rgba(184, 129, 207, 1)',
        transform:'rotate(-180deg)',
    },




})
