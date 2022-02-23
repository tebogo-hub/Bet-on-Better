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
                  placeholder="     Email Address   "
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
        left: '42px',
        top: '97px',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: '42px',   
    },
    on: {
        position: 'absolute',
        width: '41px',
        height: '42px',
        left:80,
        top: '97px',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: '42px',
        color: 'rgba(184, 129, 207, 1)',
    },
    better: {
        position: 'absolute',
        color: 'rgba(184, 129, 207, 1)',
        height: '50px',
        left: '8%',
        top:120,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 42,
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
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '28px',
        color: '#ffac2c'
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
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px',
    },
    Forgot: {
        position: 'absolute',
        width: '205px',
        height: '18px',
        left: '86px',
        top: '20px',
        fontStyle: 'normal',
        fontWeight:500,
        fontSize: '18px',
        lineHeight: '28px',
        color: '#ffac2c'
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
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px',
    },
    button: {
        position: 'absolute',
        width: '123px',
        height: '30px',
        left:'30%',
        top:'200px',
        backgroundColor: '#ffac2c',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius:10,
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
