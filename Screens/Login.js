
import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import FirebaseLogin from '../auth/FirebaseLogin';
import { continueWithFacebook } from '../auth/continueWithFacebook';


export default function Login({ navigation}) {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const login = ()=>{
       FirebaseLogin(email, password, navigation);
       setEmail("");
       setPassword("");
   }
   const facebook = () =>{
       continueWithFacebook();
   }
   
    return (
        <ImageBackground style={styles.container} source={require('../assets/Background/girl.jpg')}>
            <View style={styles.Logo}>
                <Text style={styles.Bet}>Bet</Text><Text style={styles.on}>on</Text>
            </View>
            <View style={styles.logo2}>
                <Text style={styles.better}>Better</Text>
            </View>

            {/* place holders for text inputs*/}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    style={styles.TextInput}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.TextInput2}
                    onChangeText={(pass) => setPassword(pass)}
                />
            </View>
            <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate('Forgotpassword')}>Forgot password ?</TouchableOpacity>
            <View>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate('Home')}/>
                    <Text style={styles.logintext}>Login</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text 
                        style={styles.logintext}
                        onPress={()=> login()}
                    >Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.AccountContainer}>
                <Text style={styles.textaccount}>Dont have an Account?</Text>
                <TouchableOpacity style={styles.textsignup}  onPress={() => navigation.navigate('Signup')}>Sign up</TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.Facebook}
                onPress={()=> facebook()}
                >
                    <FontAwesome5 name="facebook" size={24} color="white" style={styles.icon1} />
                    <Text style={styles.text}>Connect with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.Guest}
                onPress= {()=>navigation.navigate('Home')}
                >
                    <Ionicons name="people" size={24} color="white" style={styles.icon2} />
                    <Text style={styles.text2}>Continue as Guest</Text>

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
        color: 'white',
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
        color: 'rgba(94, 206, 253, 1)',
    },
    better: {
        position: 'absolute',
        color: 'white',
        height: '42px',
        left: '8%',
        top: '125px',
        fontFamily: 'arial black',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: '30px',
        lineHeight: '42px',
    },
    inputContainer: {
        marginHorizontal: '1%',
        marginVertical: '50%',
        bottom: '50px',
    },
    TextInput: {
        borderWidth: '1px',
        position: 'absolute',
        width: '300px',
        left: '37px',
        top: '100px',
        padding: '5px',
        height: '35px',
        color: 'white',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderColor:'rgba(229, 229, 229, 1);',
        
    },
    TextInput2: {
        borderWidth: '1px',
        position: 'absolute',
        width: '300px',
        left: '37px',
        top: '150px',
        outline: 'none',
        padding: '5px',
        height: '35px',
        color: 'white',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderColor:'rgba(229, 229, 229, 1);',
    },
    touchableOpacity: {
        position: 'absolute',
        width: '300px',
        height: '59px',
        left: '37px',
        backgroundColor: 'rgba(63, 131, 224, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
        top: '10px',
        transform: 'scale(1.1)'
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
        color: 'white',
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
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
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
        left: '65px',
        top: '20px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
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
        textAlign:'center',
        color: 'white',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'bolder',
        fontSize: '12px',
        bottom: '6%',
        paddingLeft: '49%',
    },
})

