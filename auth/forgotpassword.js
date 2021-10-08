import {firebase} from '../config/firebase'
import Alerts from '../auth/Alerts'
const forgotpassword = ((email,navigation) =>{
    let msg = "check your email to reset password"
    firebase.auth().sendPasswordResetEmail(email).then(()=>{
        Alerts(msg)
        navigation.navigate()
    }).catch((e)=>{
        console.log(e)
    })
    
})
export {forgotpassword}