import { firebase } from "../config/firebase";
import Alerting from "./Alerting";



const FirebaseSignUp = (name, email, password,navi) => {
  let msg = "Successfully Signed Up!!";
  let title = 'Welldone'
  let datab = firebase.firestore();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      datab.collection("UserCreds").doc(email).set({
        name: name,
        email: email,
      });
      Alerting(title, msg);
     navi.navigate('Login')
    })
    .catch((err) => console.log(err));
};

export { FirebaseSignUp };
