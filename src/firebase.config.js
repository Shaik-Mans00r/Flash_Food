import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyB7nOXWI2ofb97SYMgPAE3p-6nOFOaOP6M",
    authDomain: "flashfood-f67b2.firebaseapp.com",
    databaseURL: "https://flashfood-f67b2-default-rtdb.firebaseio.com",
    projectId: "flashfood-f67b2",
    storageBucket: "flashfood-f67b2.appspot.com",
    messagingSenderId: "658670790958",
    appId: "1:658670790958:web:7c2e3e9c98f2872cac32bf"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage }; 