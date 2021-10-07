import { Alert } from "react-native"
import { firebase } from "../config/firebase"
import Alerts from "./Alerts"
const FirebaseSignUp =((name, email, password)=>{
  let message="Successfully Signed Up!!"
    let datab = firebase.firestore()
    firebase.auth() .createUserWithEmailAndPassword(email, password)
    .then(() => {
      datab.collection("UserCreds").doc(email).set({
        name: name,
        email: email
      })
      msg = 'account created'

    }).catch(err =>
      console.log(err))
      Alerts(msg)


})

export { FirebaseSignUp }