import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Image, Button } from 'react-native'


export default function Discription() {
    return (
        <View style={styles.container}>
            <View style={styles.containerBox}>
                <Text style={styles.text1}>Send Gift or Donate</Text>
                <Text style={styles.text2}>Add delivery details and personal message</Text>
            </View>
            <Text style={styles.RecipientText}>Recipient name*</Text>
            <TextInput
                style={styles.TextInput}
            />
            <Text style={styles.RecipientEmail}>Recipient Email Address*</Text>
            <TextInput
                style={styles.TextInput2}
            />
            <Text style={styles.Yourname}>Your Name*</Text>
            <TextInput
                style={styles.TextInput3}
            />
            <Text style={styles.Youremail}>Your Email*</Text>
            <TextInput
                style={styles.TextInput4}
            />
            <Text style={styles.Yourmessage}>Your Message*</Text>
            <TextInput
                style={styles.TextInput5}
            />
            <TouchableOpacity style={styles.TouchableOpacity}><Text style={styles.Text}>Send</Text></TouchableOpacity>
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
    containerBox: {
        position: 'absolute',
        width: 375,
        height: 120,
        left: 0,
        top: 0,
        backgroundColor: 'rgba(184, 129, 207, 1)'
    },
    text1: {
        position: 'absolute',
        left: 101,
        top: 66,
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '18px',
        lineHeight: '21px',
        color: 'rgba(94, 206, 253, 1)'
    },
    text2: {
        position: 'absolute',
        left: 65,
        top: 94,
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '13px',
        lineHeight: '15px',
        color: 'white',
    },
    TextInput: {
        position: 'absolute',
        width: 321,
        height: 30,
        left: 29,
        top: 173,
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.25)',
        boxSizing: 'border-box',
    },
    TextInput2: {
        position: 'absolute',
        width: 321,
        height: 30,
        left: 29,
        top: 224,
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.25)',
        boxSizing: 'border-box',
    },
    TextInput3: {
        position: 'absolute',
        width: 321,
        height: 30,
        left: 29,
        top: 274,
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.25)',
        boxSizing: 'border-box',
    },
    TextInput4: {
        position: 'absolute',
        width: 321,
        height: 30,
        left: 29,
        top: 325,
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.25)',
        boxSizing: 'border-box',
    },
    TextInput5: {
        position: 'absolute',
        width: 321,
        height: 30,
        left: 29,
        top: 377,
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.25)',
        boxSizing: 'border-box',
    },

    RecipientText: {
        position: 'absolute',
        left: 30,
        top: 157,
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '13px',
        lineHeight: '15px',
        color: 'rgba(0, 0, 0, 0.25)',
    },
    RecipientEmail: {
        position: 'absolute',
        left: 29,
        top: 210,
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '13px',
        lineHeight: '15px',
        color: 'rgba(0, 0, 0, 0.25)',
    },
    Yourname: {
        position: 'absolute',
        left: 29,
        top: 261,
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '13px',
        lineHeight: '15px',
        color: 'rgba(0, 0, 0, 0.25)',
    },
    Youremail: {
        position: 'absolute',
        left: 29,
        top: 311,
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '13px',
        lineHeight: '15px',
        color: 'rgba(0, 0, 0, 0.25)',
    },
    Yourmessage: {
        position: 'absolute',
        left: 29,
        top: 363,
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '13px',
        lineHeight: '15px',
        color: 'rgba(0, 0, 0, 0.25)',
    },
    TouchableOpacity: {
        position: 'absolute',
        width: 288,
        height: 40,
        left: 43,
        top: 519,
        backgroundColor: 'rgba(184, 129, 207, 1)',
        borderRadius: '16px',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
    },
    Text: {
        position: 'absolute',
        left:130,
        top:10,
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '13px',
        lineHeight: '15px',
        color:'white',
    },










})
