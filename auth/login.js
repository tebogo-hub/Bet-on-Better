import {firebase} from '../config/firebase'
export default function login (email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {



}).catch((error) => {
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}

