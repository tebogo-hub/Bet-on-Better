import { firebase } from "../config/firebase";
import Alerts from "./Alerts";
const Naviga = ((navi)=>{
  navi.navigate('Login')
})
const FirebaseSignUp = (name, email, password) => {
  let msg = "Successfully Signed Up!!";
  let datab = firebase.firestore();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      datab.collection("UserCreds").doc(email).set({
        name: name,
        email: email,
      });
      Alerts(msg);
     
    })
    .catch((err) => console.log(err));
};

export { FirebaseSignUp, Naviga };
