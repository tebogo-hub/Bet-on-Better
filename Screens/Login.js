
import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, } from 'react-native'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import FirebaseLogin from '../auth/FirebaseLogin';
import { continueWithFacebook } from '../auth/continueWithFacebook';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        FirebaseLogin(email, password, navigation);
        setEmail("");
        setPassword("");
    }
    const facebook = () => {
        continueWithFacebook();
    }

    const loadSc = () => {
        navigation.navigate("LoaderScreen")

    }
    const load = () => {
        loadSc()
        setTimeout(function time() {
        navigation.navigate("Home")

        }, 5000)

    }
    return (
        <ImageBackground style={styles.container}>
            <View style={styles.Logo}>
                <Text style={styles.Bet}>Bet</Text><Text style={styles.on}>on</Text>
            </View>
            <View style={styles.logo2}>
                <Text style={styles.better}>Better</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Username"
                    style={styles.TextInput}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.TextInput2}
                    onChangeText={(pass) => setPassword(pass)}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate('Forgotpassword')}>Forgot password ?</TouchableOpacity>
            <View>
                
                <Text style={styles.logintext}>Sign in</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text
                        style={styles.logintext}
                        onPress={() => load()}
                    >Sign in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.AccountContainer}>
                <Text style={styles.textaccount}>Dont have an Account?</Text>
                <TouchableOpacity style={styles.textsignup} onPress={() => navigation.navigate('Signup')}>Sign up</TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.Facebook}
                onPress={() => facebook()}
            >
                <FontAwesome5 name="facebook" size={24} color="white" style={styles.icon1} />
                <Text style={styles.text}>Sign in with Facebook</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.textbottom}>By helping a soul, together we can change the world.</Text>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
        width: '375px',
        height: '812px',

    },
    Logo: {
        marginHorizontal: '1%',
        display: 'flex',
        flexDirection: 'row',
    },
    logo2: {
        marginHorizontal: '5%',
    },
    Bet: {
        position: 'absolute',
        color: 'rgba(94, 206, 253, 1)',
        left: 42,
        top: 97,
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '42px',
    },
    on: {
        position: 'absolute',
        width: '41px',
        height: '42px',
        left: '80px',
        top: '97px',
        fontStyle: 'normal',
        fontWeight: "normal",
        fontSize: ' 24px',
        lineHeight: '42px',
        color: 'rgba(184, 129, 207, 1)',
    },
    better: {
        position: 'absolute',
        color: 'rgba(184, 129, 207, 1)',
        height: '50px',
        left: '8%',
        top: '120px',
        fontStyle: 'normal',
        fontWeight: "normal",
        fontSize: '24px',
        lineHeight: '42px',
    },
    inputContainer: {
        marginHorizontal: '1%',
        marginVertical: '50%',
        bottom: '50px',
    },
    TextInput: {

        position: 'absolute',
        width: '300px',
        left: '37px',
        top: '100px',
        padding: '5px',
        height: '45px',
        color: 'black',
        fontStyle: 'normal',
        fontWeight: "normal",
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '10px',
    },
    TextInput2: {

        position: 'absolute',
        width: '300px',
        left: '37px',
        top: '160px',
        outline: 'none',
        padding: '5px',
        height: '45px',
        color: 'black',
        fontStyle: 'normal',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '10px',
    },
    touchableOpacity: {
        position: 'absolute',
        width: '300px',
        height: '59px',
        left: '37px',
        backgroundColor: '#ffac2c',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
        top: '10px',
        transform: 'scale(1.1)'
    },
    logintext: {
        position: 'absolute',
        height: '21px',
        left: '40%',
        fontSize: 'normal',
        fontWeight: "normal",
        fontSize: '18px',
        lineHeight: '21px',
        color: 'white',
        top: '20px',
    },
    AccountContainer: {
        alignItems: 'center',
        marginTop: '25%',
        display: 'flex',
        flexDirection: 'row',
    },
    textaccount: {
        position: 'absolute',
        width: '150px',
        height: '16px',
        left: '103px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: "normal",
        fontSize: '12px',
        lineHeight: '16px',
        color: 'black',
    },
    textsignup: {
        position: 'absolute',
        width: '48px',
        height: '16px',
        left: '230px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: "normal",
        fontSize: '12px',
        lineHeight: '16px',
        color: 'rgba(54, 124, 255, 1)',
    },
    Facebook: {
        position: 'absolute',
        width: '300px',
        height: '59px',
        left: '37px',
        top: '589px',
        backgroundColor: 'background: rgba(94, 206, 253, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '15px',
    },
    text: {
        position: 'absolute',
        left: '80px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: "normal",
        fontSize: '14px',
        lineHeight: '21px',
        color: 'white',
        top: '20px',
    },
    Guest: {
        position: 'absolute',
        width: '300px',
        height: '59px',
        left: '37px',
        top: '671px',
        backgroundColor: 'rgba(63, 131, 224, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '15px',
    },
    text2: {
        position: 'absolute',
        height: '21px',
        left: '90px',
        top: '20px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: "normal",
        fontSize: '14px',
        lineHeight: '21px',
        color: 'white',
    },
    textbottom: {
        position: 'absolute',
        height: '14px',
        left: '34px',
        top: '300px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        color: 'rgba(94, 206, 253, 1)',
    },
    facebookicon: {
        position: 'absolute',
        width: '30px',
        height: '30px',
        left: '57px',
        top: '50px',

    },
    icon1: {
        position: 'absolute',
        left: '10px',
        top: '17px',
    },
    icon2: {
        position: 'absolute',
        left: '10px',
        top: '14px',
    },
    forgot: {
        position: 'relative',
        textAlign: 'center',
        color: 'black',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: "normal",
        fontSize: '12px',
        bottom: '1%',
        paddingLeft: '55%',
        lineHeight: '15px',
        marginTop: '5px'

    },
})

