

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6HbhqSJM91-1u9fWFrgnUnhwXnLEzG5E",
    authDomain: "careerhub-authentication.firebaseapp.com",
    projectId: "careerhub-authentication",
    storageBucket: "careerhub-authentication.appspot.com",
    messagingSenderId: "640927156189",
    appId: "1:640927156189:web:2404d1c93ed635684c1834"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // You might need to export the auth module

