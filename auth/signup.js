import { firebase } from "../config"

const signup =((name, email, password)=>{
    let datab = firebase.firestore()
    firebase.auth() .createUserWithEmailAndPassword(name, email, password)
    .then((userCredential) => {
      datab.collection("UserCreds").doc(email).set({name,email,password})
})
})

export {signup}