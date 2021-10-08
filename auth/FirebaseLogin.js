import { firebase } from "../config/firebase";
import Alerting from "./Alerting";
export default function FirebaseLogin(email, password,navi) {
  let msg = "signed in";
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      Alerting(msg);
      navi.navigate("Home");
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  
}
