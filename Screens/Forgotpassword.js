import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native'

function Forgotpassword({navigation}) {
    return (
        <ImageBackground style={styles.container} source={require('../assets/Background/girl.jpg')}>
       

            <View style={styles.box}>
                <Text style={styles.Forgot}>Forgot Password</Text>
                <TextInput
                  placeholder=" Your E-mail Address "
                  style={styles.TextInput}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.resetpassword} onPress={() => navigation.navigate('Login')}>Reset Password</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

export default Forgotpassword
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
        width: '375px',
        height: '812px',
    },
    Reset: {
        position: 'absolute',
        width: '237',
        height: '28px',
        left: '70px',
        top: '88px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '24px',
        lineHeight: '28px',
        color: 'rgba(54, 124, 255, 1)'
    },
    box: {
        position: 'absolute',
        width: '315px',
        height: '245px',
        left: '31px',
        top: '196px',
        backgroundColor: 'rgba(243, 245, 253, 0.5)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius:'16px',

    },
    Forgot: {
        position: 'absolute',
        width: '205px',
        height: '18px',
        left: '86px',
        top: '9px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight:'bold',
        fontSize: '18px',
        lineHeight: '28px',
        color: 'white'
    },
    TextInput:{
        position: 'absolute',
        width: '264px',
        height: '41px',
        left: '25px',
        top: '100px',
        backgroundColor: 'white', 
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderColor:'black',
        borderRadius:'16px',
    },
    button: {
        position: 'absolute',
        width: '123px',
        height: '30px',
        left:'30%',
        top:'200px',
        backgroundColor: 'rgba(94, 206, 253, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius:'15px',
    },
    resetpassword: {
        position: 'absolute',
        width: '103%',
        height: '14px',
        left: '25px',
        top: '8px',
        fontFamily:'arial',
        fontStyle:'normal',
        fontWeight:'900px',
        fontSize:'11px',
        lineHeight:'14px',
        color:'white'
    },



})
