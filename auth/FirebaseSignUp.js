import { firebase } from "../config/firebase"
import Alerts from "./Alerts"
const FirebaseSignUp =((name, email, password)=>{
  let message="Successfully Signed Up!!"
    let datab = firebase.firestore()
    firebase.auth() .createUserWithEmailAndPassword(email, password)
    .then(() => {
      datab.collection("UserCreds").doc(email).set({
        name:name,
        email:email
      })
      Alerts(message)
}).catch(err =>
  console.log(err))
 
})

export {FirebaseSignUp}