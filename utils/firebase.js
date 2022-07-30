// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase,ref,set,child,update,remove, get} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZB9sdYePTKzuDWAv4VdbNkpJqUj7eTNo",
  authDomain: "decentralized-app-101a5.firebaseapp.com",
  projectId: "decentralized-app-101a5",
  storageBucket: "decentralized-app-101a5.appspot.com",
  messagingSenderId: "817734603778",
  appId: "1:817734603778:web:832b42dd077473833c031b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase()
export const dbref=ref(db);
function UpdateData(value){
    update(dbref,{
        hash:value
    }).then(()=>{
        alert(`Campaign has been created`);
    }).catch((error)=>{
        console.log(error);
    })
}

export default UpdateData;