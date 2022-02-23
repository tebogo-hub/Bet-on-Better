import React from 'react'
import { Ionicons, MaterialCommunityIcons, FontAwesome5, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Image, Button } from 'react-native'

export default function Donate({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontSize: '18px', fontWeight: '500', marginTop: '25px', color: '#ffac2c' }}>Pick a category</Text>
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
                    <Ionicons name="ios-fast-food-sharp" size={24} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                </View>
                <Text style={{ marginTop: '25px', marginLeft: '10px', textAlign: 'center', fontSize: '12px', fontWeight: '500', color: 'rgba(184, 129, 207, 1)' }}>Donat Food</Text>
                <Text style={{ fontSize: '8px', marginLeft: '30%', fontWeight: '500', }}>
                    Being a citizen, you must donate food to charity and support the cause.
                    Instead of throwing leftover food items in the garbage,
                    you can donate those to someone who is badly hungry. Apart from leftovers,
                    you can also donate different varieties of non-perishable food items to charity.
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
                top: "115px",
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
                    <MaterialCommunityIcons name="bookshelf" size={30} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                </View>
                <Text style={{ marginTop: '25px', marginLeft: '10px', textAlign: 'center', fontSize: '12px', fontWeight: '500', color: 'rgba(184, 129, 207, 1)' }}>Donat Books</Text>
                <Text style={{ fontSize: '8px', marginLeft: '30%', fontWeight: '500', }}>
                    Being a citizen, you must donate food to charity and support the cause.
                    Instead of throwing leftover food items in the garbage,
                    you can donate those to someone who is badly hungry. Apart from leftovers,
                    you can also donate different varieties of non-perishable food items to charity.
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
                top: "130px",
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
                    <Ionicons name="shirt" size={30} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                </View>
                <Text style={{ marginTop: '25px', marginLeft: '10px', textAlign: 'center', fontSize: '12px', fontWeight: '500', color: 'rgba(184, 129, 207, 1)' }}>Donat Clothes</Text>
                <Text style={{ fontSize: '8px', marginLeft: '30%', fontWeight: '500', }}>
                    Being a citizen, you must donate food to charity and support the cause.
                    Instead of throwing leftover food items in the garbage,
                    you can donate those to someone who is badly hungry. Apart from leftovers,
                    you can also donate different varieties of non-perishable food items to charity.
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
                top: "145px",
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
                    <MaterialIcons name="toys" size={30} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                </View>
                <Text style={{ marginTop: '25px', marginLeft: '10px', textAlign: 'center', fontSize: '12px', fontWeight: '500', color: 'rgba(184, 129, 207, 1)' }}>Donat Toys</Text>
                <Text style={{ fontSize: '8px', marginLeft: '30%', fontWeight: '500', }}>
                    Being a citizen, you must donate food to charity and support the cause.
                    Instead of throwing leftover food items in the garbage,
                    you can donate those to someone who is badly hungry. Apart from leftovers,
                    you can also donate different varieties of non-perishable food items to charity.
                </Text>
            </TouchableOpacity>
            <View style={{ position: 'fixed', backgroundColor: 'rgba(15, 16, 17, 0.37)', width: '375px', height: '55px', left: '0px', top: '95%', }}>
                <TouchableOpacity style={{ marginTop: '5px', marginLeft: '10px', backgroundColor: '#ffac2c', boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)', marginRight: '10px', borderRadius: '14px', }} onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
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




