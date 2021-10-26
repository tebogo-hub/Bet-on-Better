import React from 'react'
import { AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'

export default function Gift({ navigation }) {
    return (
        <SafeAreaView style={styles.container}
        
        >
             <AntDesign name="arrowleft" size={24} color="rgba(94, 206, 253, 1)" style={styles.ArrowLeft} onPress={() => navigation.navigate('Home')} />
            <ScrollView style={styles.ScrollContainer}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                pagingEnabled={false}>
               
                <View style={styles.ViewBox}>
                <FontAwesome name="handshake-o" size={100} color="white" style={styles.icon}/>
                    <Text style={styles.Text2}>To Say Thank you</Text>
                </View>
                <View style={styles.ViewBox2}>
                <FontAwesome5 name="gifts" size={100} color="rgba(184, 129, 207, 1)" style={styles.icon}/>
                    <Text style={styles.Text2}>For Christmas</Text>
                </View>
                <View style={styles.ViewBox3}>
                <MaterialCommunityIcons name="egg-easter" size={100} color="white" style={styles.icon}/>
                    <Text style={styles.Text2}>For Easter</Text>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Description')}>
                <Text style={styles.Text}>Send Gift</Text>
            </TouchableOpacity>

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
    ScrollContainer: {
        position: 'absolute',
        width: '100%',
        height: 626,
        left: 0,
        top: 0,
        backgroundColor: 'white',
        display: 'flex',
    },
    Btn: {
        position: 'absolute',
        width: 282,
        height: 40,
        left: 44,
        top: 655,
        backgroundColor: '#B881CF',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
    },
    Text: {
        position: 'absolute',
        left: 110,
        top: 10,
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 13,
        lineHeight: 15,
        color: '#FFFFFF',
    },
    ArrowLeft: {
        position: 'absolute',
        left: 10,
        top: 33,
    },
    Text2: {
        position: 'absolute',
        left: 100,
        top: 200,
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 15,
        color: '#FFFFFF',
    },
    ViewBox:{
        position: 'absolute',
        width:286,
        height:286,
        left:44,
        top:180,
        backgroundColor: 'rgba(94, 206, 253, 1)',
        borderRadius: '16px',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
    },
    ViewBox2: {
        position: 'absolute',
        width:286,
        height:286,
        left:354,
        top:180,
        backgroundColor: 'rgba(94, 206, 253, 1)',
        borderRadius: '16px',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
    },
    ViewBox3: {
        position: 'absolute',
        width:286,
        height:286,
        left:654,
        top:180,
        backgroundColor: 'rgba(94, 206, 253, 1)',
        borderRadius: '16px',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
    },
    icon: {
        position: 'absolute',
        left:85,
        top:20,
    },



})