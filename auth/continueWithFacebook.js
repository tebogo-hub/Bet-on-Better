import {firebase} from "../config/firebase"
var provider = new firebase.auth.FacebookAuthProvider();
const continueWithFacebook =(()=>{
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
  
      var user = result.user;
      var accessToken = credential.accessToken;
  
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
     
      var email = error.email;
      
      var credential = error.credential;
    });
})
export {continueWithFacebook}