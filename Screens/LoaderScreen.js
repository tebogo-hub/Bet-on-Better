import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';


function LoaderScreen({ navigation }) {
    return (

        <ImageBackground
            style={styles.bannersContainer}
            source={require('../assets/Background/run.jpg')}>
            <Text style={{
                textAlign: 'center',
                marginTop: "50px",
                color: "white",
                fontSize: "18px",
            }}>Welcome</Text>
            <TouchableOpacity
            ><Text style={{
                textAlign: 'center',
                marginTop: "20%",
                color: "white",
                fontSize: '18px'
            }} onPress={() => navigation.navigate('Login')}>Lets get Started!</Text>
            </TouchableOpacity>
            <View style={{ 
                
                flex:1,
                justifyContent:"center"

            }}>
                <ActivityIndicator size="large" style={{ color:'#ffac2c'}} />
            </View>

        </ImageBackground>

    )
}
export default LoaderScreen;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
        color: 'white'
    },
    bannersContainer: {
        position: "absolute",
        width: "375px",
        height: "812px",
        left: "0px",
        top: "0px",
    },


})