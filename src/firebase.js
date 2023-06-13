import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJbyuAVKmOaCoqT8vrOga6uuWD9dKVp7g",
  authDomain: "howard-a0914.firebaseapp.com",
  projectId: "howard-a0914",
  storageBucket: "howard-a0914.appspot.com",
  messagingSenderId: "215124470581",
  appId: "1:215124470581:web:7b0935c0e184e3ed65ba7c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db  = getFirestore(app)


export default app;
