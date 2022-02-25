// import * as firebase from "firebase";

// import 'firebase/auth';
// import 'firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx",
  appId: "xxxxx"
};
const app = initializeApp(firebaseConfig);

// let app
// if(firebase.apps.length ===0){
//   console.log(1);
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// }else{
//     app = firebase.app()
// }
// const auth = firebase.auth();
// const db = firebase.firestore();
// export {auth, db};
