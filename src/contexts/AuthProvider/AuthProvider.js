import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const OAuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    /* Login with email */
    const loginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    /* Create User with Social Media */
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    /* Create User with email and password */
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* Update User Info */
    const updateUserInfo = (info) => {
        return updateProfile(auth.currentUser, info)
    }

    /* Forgot Password */
    const passwordReset = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    /* Logout */
    const logout = () => {
        setLoading(true)
        // localStorage.removeItem('jwtToken')
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        providerLogin,
        loginWithEmail,
        createUser,
        updateUserInfo,
        passwordReset,
        logout
    }

    return (
        <div>
            <OAuthContext.Provider value={authInfo}>
                {children}
            </OAuthContext.Provider>
        </div>
    );
};

export default AuthProvider;