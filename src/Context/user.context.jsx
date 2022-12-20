import { createContext, useState, useEffect } from "react";
import { onAuthChangeListener } from "../utils/firebase/firebase.utils";
import { storeAuthUsers } from "../utils/firebase/firebase.utils";

//export the createContext that hold the default state value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

//create a provider that passes down values to the children component
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }
    
    //observer 
    useEffect(() => {
        const unsubscribe = onAuthChangeListener((user) => {
            if(user){
                storeAuthUsers(user)
            }setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    //return the userContext provider the grants the children props access to the 
    //userContext values
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}