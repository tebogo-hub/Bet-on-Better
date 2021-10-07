import {firebase} from '../config/firebase'
const Logout=() => {
    firebase.auth().signOut()
}

export default Logout
