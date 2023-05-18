import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const signUpNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateProfileInfo=(name, photoURL)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
          .then()
          .catch(error=>console.log(error.message))
    }
    const logInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logInGoogleUser = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
            
    }
    const authInfo = {
        signUpNewUser,
        setUser,
        setLoading,
        error,
        setError,
        updateProfileInfo,
        logInUser,
        logInGoogleUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;