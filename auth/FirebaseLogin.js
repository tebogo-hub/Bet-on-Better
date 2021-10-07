import {firebase} from '../config/firebase'
export default function FirebaseLogin (email, password) {
    console.log(email, password)
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        alert('Signed in')})
    .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
    })
    
    
    
}

