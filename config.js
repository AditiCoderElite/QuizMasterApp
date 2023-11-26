import firebase from 'firebase';

const firebaseConfig = {
  //
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()