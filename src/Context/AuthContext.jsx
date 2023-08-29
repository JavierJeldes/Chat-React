import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => { 

    const [currentUser, setCurrentUser] = useState({});

    useEffect(()=>{
        onAuthStateChanged(auth,(user) => {
            setCurrentUser(user);
            
        });

        return () => {
            unsub();
        };
    },[]);

    return (
    <AuthContext.Provider value={{ currentUser }}>
        {children}
    </AuthContext.Provider>
    );
};