import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDm0k_97AqDVTKmRhT52USR3aT7LLtRrQ",
  authDomain: "gameslib.firebaseapp.com",
  projectId: "gameslib",
  storageBucket: "gameslib.appspot.com",
  messagingSenderId: "114170331925",
  appId: "1:114170331925:web:30adf668c2d5cdb4695f1c"
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
});

export default firebase;