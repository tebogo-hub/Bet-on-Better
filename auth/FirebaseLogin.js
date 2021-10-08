import { firebase } from "../config/firebase";
import Alerts from "./Alerts";
export default function FirebaseLogin(email, password,navi) {
  let msg = "signed in";
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      Alerts(msg);
      navi.navigate("Home");
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  
}
