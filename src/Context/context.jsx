import { createContext, useState } from "react";

//export the createContext that hold the default state value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

//create a provider that passes down values to the children component
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }
    //return the userContext provider the grants the children props access to the 
    //userContext values
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}