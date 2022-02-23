import {
  firebase
} from '../config/firebase';


const getNgos = () => {
  firebase.firestore().collection('ngos').get().then((querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data ;
  });

 

}



export default getNgos;