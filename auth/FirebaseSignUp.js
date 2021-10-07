import { firebase } from "../config/firebase";
import Alerts from "./Alerts";
const FirebaseSignUp = (name, email, password,navi) => {
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
     navi.navigate('Login')
    })
    .catch((err) => console.log(err));
};

export { FirebaseSignUp};
