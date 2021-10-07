import {firebase} from '../config/firebase'
import Login from '../Screens/Login'
const Logout=({navigation}) => {
    firebase.auth().signOut()
    navigation.navigate(Login)
}

export default Logout
