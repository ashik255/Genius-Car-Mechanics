import {onAuthStateChanged, signOut, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
initializeAuthentication();

const auth = getAuth();
const Googleprovider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user,setUser]= useState({});

    const signInUsingGoogle = () =>{
        signInWithPopup(auth,Googleprovider)
        .then(result =>{
            setUser(result.user);
        })
    }

    useEffect ( ()=>{
        onAuthStateChanged(auth,user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
        })
    },[])
    const logOut = () =>{
        signOut(auth)
        .then(() => {});
    }
    return{
        user,
        signInUsingGoogle,
        logOut
         
    }
}
export default useFirebase;