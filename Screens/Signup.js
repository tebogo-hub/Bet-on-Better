
import React,{useState} from 'react'
import { FirebaseSignUp, Naviga } from '../auth/FirebaseSignUp'
import { View, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

export default function Signup({ navigation}) {
    const [Fname,setFname] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const FirebaseSign = (navi) =>{
       FirebaseSignUp(Fname,email,password,navi)
    }

    return (
        <ImageBackground style={styles.container} source={require('../assets/Background/girl.jpg')}>
            <View style={styles.Logo}>
                <Text style={styles.Bet}>Bet</Text><Text style={styles.on}>on</Text>
            </View>
            <View style={styles.logo2}>
                <Text style={styles.better}>Better</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Full Name"
                    style={styles.TextInput}
                    onChangeText={(Fname) => setFname(Fname)}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.TextInput2}
                    onChangeText={(email) => setEmail(email)}
                />

                <TextInput
                    placeholder="Password"
                    style={styles.TextInput3}
                    onChangeText={(password) => setPassword(password)}
                />

                <TextInput
                    placeholder="Confirm Password"
                    style={styles.TextInput4}
                    onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => FirebaseSign(navigation)}>
                    <Text style={styles.logintext}>Sign up</Text>
                </TouchableOpacity>
            </View>
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
        borderColor:'rgba(229, 229, 229, 1);',
        height: '35px',
        color: 'white',
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
        borderColor:'rgba(229, 229, 229, 1);',
        color: 'white',
    },
    TextInput3: {
        borderWidth: '1px',
        position: 'absolute',
        width: '300px',
        height: '35px',
        top: '200px',
        outline: 'none',
        padding: '5px',
        borderColor:'rgba(229, 229, 229, 1);',
        color: 'white',
        left: '37px',
    },
    TextInput4: {
        borderWidth: '1px',
        position: 'absolute',
        width: '300px',
        height: '35px',
        top: '250px',
        outline: 'none',
        padding: '5px',
        borderColor:'rgba(229, 229, 229, 1);',
        color: 'white',
        left: '37px',
    },
    touchableOpacity: {
        position: 'absolute',
        width: '300px',
        height: '59px',
        left: '40px',
        backgroundColor: 'rgba(63, 131, 224, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
        top: '80px',
    },
    logintext: {
        position: 'absolute',
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
    textbottom: {
        position: 'absolute',
        height: '14px',
        left: '34px',
        top: '400px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        color: 'rgba(94, 206, 253, 1)',
    },
})
