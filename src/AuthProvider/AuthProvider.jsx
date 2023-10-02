import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { GithubAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";







export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState({});

    const googlSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const githubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider);
    }
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    const emailPassSignIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signUp =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => { 
            setUser(user);
        });
    })

    const logOut = ()=>{
        signOut(auth);
    }


   console.log(user);




    const authentications = {
        googlSignIn,
        githubSignIn,
        facebookSignIn,
        emailPassSignIn,
        logOut,
        user,
        signUp

    }

    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;