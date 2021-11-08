import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider); 
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }else{
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=> unsubscribe()
    },[]);

    const loginWithEmailAndPassword = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const createAcountWithGoogle = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            window.location.reload()
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false));
    }



    return {
        user,
        signInUsingGoogle,
        logOut,
        setIsLoading,
        isLoading,
        createAcountWithGoogle,
        loginWithEmailAndPassword,
        updateName
    }
}

export default useFirebase;