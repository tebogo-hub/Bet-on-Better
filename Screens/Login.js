
import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'


export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.Logo}>
                <Text style={styles.Bet}>Bet</Text><Text style={styles.on}>on</Text>
            </View>
            <View style={styles.logo2}>
                <Text style={styles.better}>Better</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    style={styles.TextInput}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.TextInput2}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text style={styles.logintext}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.AccountContainer}>
                <Text style={styles.textaccount}>Dont have an Account?</Text>
                <TouchableOpacity style={styles.textsignup}>Sign up</TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.Facebook}><Text style={styles.text}>Connect with Facebook</Text></TouchableOpacity>
            <TouchableOpacity></TouchableOpacity>

        </View>
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
        marginVertical: '1%',
        display: 'flex',
        flexDirection: 'row',
    },
    logo2: {
        marginHorizontal: '5%',
    },
    Bet: {
        position: 'absolute',
        width: '56px',
        height: '42px',
        left: '42px',
        top: '97px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: '36px',
        lineHeight: '42px',
    },
    on: {
        position: 'absolute',
        width: '41px',
        height: '42px',
        left: '95px',
        top: '97px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: '36px',
        lineHeight: '42px',
        color: 'rgba(94, 206, 253, 1)',
    },
    better: {
        position: 'absolute',
        width: '101px',
        height: '42px',
        left: '8%',
        top: '125px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: '36px',
        lineHeight: '42px',
    },
    inputContainer: {
        marginHorizontal: '1%',
        marginVertical: '50%',

    },
    TextInput: {
        borderBottomWidth: '1px',
        position: 'absolute',
        width: '300px',
        left: '37px',
        top: '100px',
        outline: 'none',
    },
    TextInput2: {
        borderBottomWidth: '1px',
        position: 'absolute',
        width: '300px',
        left: '37px',
        top: '150px',
        outline: 'none',
    },
    touchableOpacity: {
        position: 'absolute',
        width: '300px',
        height: '59px',
        left: '37px',
        backgroundColor: 'rgba(63, 131, 224, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
    },
    logintext: {
        position: 'absolute',
        width: '50px',
        height: '21px',
        left: '40%',
        fontFamily: 'arial',
        fontSize: 'normal',
        fontweight: '100px',
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
        fontweight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
    },
    textsignup: {
        position: 'absolute',
        width: '48px',
        height: '16px',
        left: '250px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '900px',
        fontSize: '14px',
        lineHeight: '16px',
        color: 'rgba(63, 131, 224, 1)',
    },
    Facebook: {
        position: 'absolute',
        width: '300px',
        height: '59px',
        left: '37px',
        top: '589px',
        backgroundColor: 'background: rgba(94, 206, 253, 1)',
        boxShadow: '0px 4px 4px rgba (0, 0, 0, 0.25)',
        borderRadius: '15px',
    },
    text: {
        position: 'absolute',
        width: '188px',
        height: '21px',
        left: '50px',
        font_family: 'arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        color: 'white',
        top: '20px',


    }





})

