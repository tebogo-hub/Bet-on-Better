import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Image, Button } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function Discription() {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={styles.textContainer}>Donate for Food</Text>
            </View>
            <View style={styles.Box}>
                <View style={styles.CardBox}>
                    <Ionicons name="ios-fast-food-outline" size={40} color="rgba(144, 106, 187, 1)" style={styles.icon1} />
                </View>
                <TextInput
                    placeholder="  Types of food "
                    style={styles.TextInput}
                />
                <TextInput
                    placeholder="  Name "
                    style={styles.TextInput2}
                />
                <TextInput
                    placeholder="  Email "
                    style={styles.TextInput3}
                />
                <TextInput
                    placeholder="  Phone number "
                    style={styles.TextInput4}
                />
                <View>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Text style={styles.Text}>Finish</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Text style={styles.textbottom}>
                By helping a soul, together we can change the world.
            </Text>

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
    cardContainer: {
        position: 'relative',
        width: '375',
        height: '133px',
        backgroundColor: 'rgba(184, 129, 207, 1)',
    },
    Box: {
        position: 'absolute',
        width: '323px',
        height: '434px',
        left: '21px',
        top: '150px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '1px solid rgba(184, 129, 207, 1)',
        boxSizing: 'border-box',
        boxshadow: '0px 4px 4px 0px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
    },
    textContainer: {
        position: 'absolute',
        width: '127',
        height: '21px',
        left: '124px',
        top: '62px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '18px',
        lineHeight: '21px',
        color: 'white',
    },
    icon1: {
        position: 'absolute',
        left: '30px',
        top: '30px',

    },
    TextInput: {
        position: 'absolute',
        width: '288px',
        height: '30px',
        top: '120px',
        backgroundColor: 'white',
        border: '1px solid rgba(144, 106, 187, 1)',
        boxSizing: 'border-box',
        left: '15px'
    },
    TextInput2: {
        position: 'absolute',
        width: '288px',
        height: '30px',
        top: '160px',
        backgroundColor: 'white',
        border: '1px solid rgba(144, 106, 187, 1)',
        boxSizing: 'border-box',
        left: '15px'
    },
    TextInput3: {
        position: 'absolute',
        width: '288px',
        height: '30px',
        top: '200px',
        backgroundColor: 'white',
        border: '1px solid rgba(144, 106, 187, 1)',
        boxSizing: 'border-box',
        left: '15px'
    },
    TextInput4: {
        position: 'absolute',
        width: '288px',
        height: '30px',
        top: '240px',
        backgroundColor: 'white',
        border: '1px solid rgba(144, 106, 187, 1)',
        boxSizing: 'border-box',
        left: '15px',
    },
    TouchableOpacity: {
        position: 'absolute',
        width: '288px',
        height: '30px',
        left: '15px',
        top: '370px',
        backgroundColor: 'rgba(184, 129, 207, 1)',
        borderRadius: '16px',
        boxshadow: '0px 4px 4px 0px rgba(0,0,0, 0.25)',
    },
    Text:{
        position: 'absolute',
        width: '100px',
        height: '15px',
        left: '115px',
        top:'370',
        fontFamily: 'arial',
        fontstyle: 'normal',
        fontweight: 'bold',
        fontsize: '13px',
        lineHeight: '31px',
        color: 'white',
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



})
