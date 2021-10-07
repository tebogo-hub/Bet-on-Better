import {firebase} from '../config/firebase'
import Alerts from './Alerts'
import Home from '../Screens/Home'
export default function FirebaseLogin (email, password) {
    let msg
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        msg = 'signed in'
        navigation.navigate('Home')
    })    
    .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
    })
    Alerts(msg)
    
    
    
}

