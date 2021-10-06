import { firebase } from "../config/firebase"

const FirebaseSignUp =((name, email, password)=>{
    let datab = firebase.firestore()
    firebase.auth() .createUserWithEmailAndPassword(name, email, password)
    .then((userCredential) => {
      datab.collection("UserCreds").doc(email).set({name,email,password})
      console.log('clicked')
}).catch(err =>
  console.log(err))
})

export {FirebaseSignUp}