import {firebase} from '../config/firebase'
import Alerts from './Alerts'
export default function FirebaseLogin (email, password) {
    let msg
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        msg = 'signed in'
    })    
    .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
    })
    Alerts(msg)
    
    
    
}

