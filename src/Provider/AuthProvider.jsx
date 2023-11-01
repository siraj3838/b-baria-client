import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loggedInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false);
            if (currentUser) {
                axios.post('http://localhost:5039/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else{
                axios.post('http://localhost:5039/logout', loggedUser, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const myAuth = {
        user,
        loading,
        createUser,
        loggedInUser,
        googleLogin,
        logoutUser
    }
    return (
        <AuthContext.Provider value={myAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;