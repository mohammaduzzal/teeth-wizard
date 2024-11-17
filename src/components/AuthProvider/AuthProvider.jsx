import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/Firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)

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

    const manageProfile = (name,image)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:image
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser);
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            setLoading(false)
        })
        
        return ()=>{
            unSubscribe()
        }
    },[])

const AuthInfo ={
    handleRegister,
    handleLogin,
    handleLogOut,
    handleGoogleLogin,
    manageProfile,
    user,
    setUser,
    loading
}


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;