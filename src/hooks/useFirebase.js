import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
        const [user, setUser] = useState({})
        const[isLoading, setIsLoading] = useState(true)

         const auth = getAuth();
         


         const signInUsingGoogle = () => {
             setIsLoading(true);
             const googleProvider = new GoogleAuthProvider();

             return signInWithPopup(auth, googleProvider)
             .then(result => {
                 setUser(result.user);
             })
             .finally(() => setIsLoading(false));
            
         }

         // observe user state change notifications
         useEffect(()=> {
             const unsubscribed = onAuthStateChanged(auth, user => {
                 if(user){
                     setUser(user);
                 }
                 else{
                     setUser({})
                 }
                 setIsLoading(false);
             });
             return () => unsubscribed;
         }, [])

         const logOut = () =>{
             signOut(auth)
             .then(() =>{
                setUser({})
             })
         }
        useEffect(()=> {
            onAuthStateChanged(auth, (user) => {
             if (user) {
              setUser(user);
    
   } 
});
        } ,[])

        return {
            user,
            signInUsingGoogle,
            signOut,
            logOut,
            isLoading
        }
}

export default useFirebase;