import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAsgT-MCyaSIV5wVLt27YhV1tuCUmVSYVE",
	authDomain: "whatsapp-clone-c914b.firebaseapp.com",
	projectId: "whatsapp-clone-c914b",
	storageBucket: "whatsapp-clone-c914b.appspot.com",
	messagingSenderId: "933989496334",
	appId: "1:933989496334:web:e4c84900adae9a4075ae5f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
