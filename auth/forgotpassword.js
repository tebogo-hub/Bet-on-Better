import {firebase} from '../config/firebase'
import Alerting from './Alerting'
const forgotpassword = ((email,navigation) =>{
    let msg = "check your email to reset password"
    firebase.auth().sendPasswordResetEmail(email).then(()=>{
        Alerting(msg)
        navigation.navigate()
    }).catch((e)=>{
        console.log(e)
    })
    
})
export {forgotpassword}