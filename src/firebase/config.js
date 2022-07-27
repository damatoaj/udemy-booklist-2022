import { initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyComvIpi1BoLB4i7_JAiLeYULYgbIkm5BE",
    authDomain: "booklist-udemy.firebaseapp.com",
    projectId: "booklist-udemy",
    storageBucket: "booklist-udemy.appspot.com",
    messagingSenderId: "790189193893",
    appId: "1:790189193893:web:43ee29b9fa6f67f03d2b4c"
  };

//init firebase like so
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

//init firebase auth
const auth = getAuth();

export { db, auth }

