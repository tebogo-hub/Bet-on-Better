import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native'
import {forgotpassword} from '../auth/forgotpassword'
function Forgotpassword({navigation}) {
    const [email,setEmail] = useState('')
    const ResetPassword = (navigation)=>{
        forgotpassword(email,navigation)
    }
    return (
        <View style={styles.container}>
             <View style={styles.Logo}>
                <Text style={styles.Bet}>Bet</Text><Text style={styles.on}>on</Text>
            </View>
            <View style={styles.logo2}>
                <Text style={styles.better}>Better</Text>
            </View>
           
            <View style={styles.box}>
                <Text style={styles.Forgot}>Forgot Password</Text>
                <TextInput
                  placeholder=" Your E-mail Address "
                  style={styles.TextInput}
                  onChangeText={(email) => setEmail(email)}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.resetpassword} onPress={() => ResetPassword(navigation)}>Reset Password</Text>
                </TouchableOpacity>
            </View>

        </View>
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
        height: '42px',
        left: '42px',
        top: '97px',
        fontFamily: 'arial black',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: '30px',
        lineHeight: '42px',   
    },
    on: {
        position: 'absolute',
        // width: '41px',
        height: '42px',
        left: '100px',
        top: '97px',
        fontFamily: 'arial black',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: '30px',
        lineHeight: '42px',
        color: 'rgba(184, 129, 207, 1)',
    },
    better: {
        position: 'absolute',
        color: 'rgba(184, 129, 207, 1)',
        height: '50px',
        left: '8%',
        top: '125px',
        fontFamily: 'arial black',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: '30px',
        lineHeight: '42px',
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
        lineHeight: '50px',
        color: 'white',
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
        top: '200px',
        backgroundColor: 'rgba(243, 245, 253, 0.5)',
        borderRadius:'0px',
        boxsizing: 'border-box',
        border: '1px solid rgba(0, 0, 0, 0.25)'
    },
    Forgot: {
        position: 'absolute',
        width: '205px',
        height: '18px',
        left: '86px',
        top: '20px',

        fontStyle: 'normal',
        fontWeight:'900px',
        fontSize: '18px',
        lineHeight: '28px',
        color: 'rgba(0, 0, 0, 0.63)'
    },
    TextInput:{
        position: 'absolute',
        width: '264px',
        height: '41px',
        left: '25px',
        top: '100px',
        backgroundColor: 'white', 
        borderColor:'black',
        borderRadius:'0px',
        border: '1px solid rgba(0, 0, 0, 0.25)', 
    },
    button: {
        position: 'absolute',
        width: '123px',
        height: '30px',
        left:'30%',
        top:'200px',
        backgroundColor: 'rgba(184, 129, 207, 1)',
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
