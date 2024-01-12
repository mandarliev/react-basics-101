import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



/**
 * These are new updates: 
 *  import 'firebase/compat/auth';
    import 'firebase/compat/firestore';
 */

const firebaseConfig = {
  apiKey: "AIzaSyByO9UVtPYMwR2DhZmPREj4xGg7Xwwr7iE",
  authDomain: "graph-2338b.firebaseapp.com",
  projectId: "graph-2338b",
  storageBucket: "graph-2338b.appspot.com",
  messagingSenderId: "668701283923",
  appId: "1:668701283923:web:0fa4373a1894fe49bf18a6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = auth();

export { db, provider, auth };
