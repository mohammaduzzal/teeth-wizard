import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/Firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();

    const handleRegister = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const handleLogOut = ()=>{
        return signOut(auth)
    }

    const handleGoogleLogin =()=>{
       return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
        })
        return ()=>{
            unSubscribe()
        }
    },[])

const AuthInfo ={
    handleRegister,
    handleLogin,
    handleLogOut,
    handleGoogleLogin
}


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;