import React from 'react'
import { Ionicons, MaterialCommunityIcons,  FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Image, Button } from 'react-native'

export default function Donate({ navigation}) {
    return (
        <View>
            <Text style={styles.Heading}>Pick a category</Text>
            <TouchableOpacity style={styles.Box1}onPress={() => navigation.navigate('')}>
                <Text style={styles.Donate}>Donate for food</Text>
            </TouchableOpacity>
            <Ionicons name="ios-fast-food-outline" size={40} color="white" style={styles.icon1}/>
            <TouchableOpacity style={styles.Box2}onPress={() => navigation.navigate('')}>
                <Text style={styles.Donate2}>Donate for clothes</Text>
            </TouchableOpacity>
            <Ionicons name="ios-shirt" size={40} color="white" style={styles.icon2}/>
            <TouchableOpacity style={styles.Box3}onPress={() => navigation.navigate('')}>
                <Text style={styles.Donate3}>Donate for kids</Text>
            </TouchableOpacity>
            <MaterialCommunityIcons name="human-male-child" size={40} color="white" style={styles.icon3} />
            <TouchableOpacity style={styles.Box4}onPress={() => navigation.navigate('')}>
                <Text style={styles.Donate4}>Donate for religion</Text>
            </TouchableOpacity>
            <FontAwesome5 name="church" size={40} color="white" style={styles.icon4} />
            <TouchableOpacity style={styles.Box5}onPress={() => navigation.navigate('')}>
                <Text style={styles.Donate5}>Donate for education</Text>
            </TouchableOpacity>
            <FontAwesome name="book" size={40} color="white" style={styles.icon5} />
            <TouchableOpacity style={styles.Box6}onPress={() => navigation.navigate('')}>
                <Text style={styles.Donate6}>Donate for offering</Text>
            </TouchableOpacity>
            <FontAwesome5 name="money-check-alt" size={40} color="white" style={styles.icon6} />
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
    Heading: {
        position: 'absolute',
        width: '127px',
        height: '21px',
        left: '124px',
        top: '84px',
        fontFamily: 'arial',
        fontSize: 'normal',
        fontweight: 'bold',
        fontSize: '18px',
        lineHeight: '21px',
        color: 'rgba(63, 131, 224, 1)',
    },
    Box1: {
        position: 'absolute',
        width: '311px',
        height: '75px',
        left: '32px',
        top: '147px',
        backgroundColor: 'rgba(94, 206, 253, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '5px',
    },
    Box2: {
        position: 'absolute',
        width: '311px',
        height: '75px',
        left: '32px',
        top: '247px',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '5px',
        backgroundColor: 'rgba(63, 131, 224, 1)'
    },
    Box3: {
        position: 'absolute',
        width: '311px',
        height: '75px',
        left: '32px',
        top: '347px',
        backgroundColor: 'rgba(94, 206, 253, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '5px',
    },
    Box4: {
        position: 'absolute',
        width: '311px',
        height: '75px',
        left: '32px',
        top: '447px',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '5px',
        backgroundColor: 'rgba(63, 131, 224, 1)'
    },
    Box5: {
        position: 'absolute',
        width: '311px',
        height: '75px',
        left: '32px',
        top: '547px',
        backgroundColor: 'rgba(94, 206, 253, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '5px',
    },
    Box6: {
        position: 'absolute',
        width: '311px',
        height: '75px',
        left: '32px',
        top: '647px',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '5px',
        backgroundColor: 'rgba(63, 131, 224, 1)'
    },
    Donate: {
        position: 'absolute',
        width: '127px',
        height: '21px',
        left: '85px',
        top: '50px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '18px',
        lineHeight: '21px',
        color: 'white',
    },
    icon1:{
        position: 'absolute',
        left:'165px',
        top: '150px',
    },
    Donate2: {
        position: 'absolute',
        width: '155px',
        height: '21px',
        left: '80px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '18px',
        lineHeight: '21px',
        color: 'white',
        top: '50px',
    },
    icon2:{
        position: 'absolute',
        left:'165px',
        top: '255px',
    },
    Donate3: {
        position: 'absolute',
        width: '129px',
        height: '21px',
        left: '80px',
        top: '50px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '18px',
        lineHeight: '21px',
        color: 'white'
    },
    icon3:{
        position: 'absolute',
        left:'165px',
        top: '350px',
    },
   Donate4: {
       position: 'absolute',
       width: '152px',
       height: '21px',
       left: '80px',
       top: '50px',
       fontFamily: 'arial',
       fontStyle: 'normal',
       fontWeight: '900px',
       fontSize: '18px',
       lineHeight: '21px',
       color: 'white',
   },
    icon4:{
        position: 'absolute',
        left:'165px',
        top: '450px',
    },
    Donate5: {
        position: 'absolute',
        width: '171px',
        height: '21px',
        left: '80px',
        top: '50px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '18px',
        lineHeight: '21px',
        color: 'white',
    },
      icon5:{
        position: 'absolute',
        left:'165px',
        top: '550px',
    },
    Donate6:{
        position: 'absolute',
        width: '155px',
        height: '21px',
        left: '80px',
        top: '50px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '18px',
        lineHeight: '21px',
        color: 'white',
    },
         icon6:{
        position: 'absolute',
        left:'165px',
        top: '655px',
    },










})




