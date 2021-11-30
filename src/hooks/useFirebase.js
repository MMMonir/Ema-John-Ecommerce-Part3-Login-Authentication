import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
   
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const LogOut = () => {
        signOut(auth).then(() => {
            setUser('')
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
        })
    }, [])

    return {
        signInUsingGoogle,
        user,
        LogOut
    }
};

export default useFirebase;