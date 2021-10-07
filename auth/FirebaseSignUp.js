import { firebase } from "../config/firebase"

const FirebaseSignUp =((name, email, password)=>{
    let datab = firebase.firestore()
    firebase.auth() .createUserWithEmailAndPassword(email, password)
    .then(() => {
      datab.collection("UserCreds").doc(email).set({
        name:name,
        email:email
      })
      
}).catch(err =>
  console.log(err))
  
})

export {FirebaseSignUp}