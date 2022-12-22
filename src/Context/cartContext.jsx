import { createContext, useState } from "react";


export const CartContext = createContext({
    cartActive: false,
    setCartActive: () => {}

})

export const CartContextProvider = ({ children }) => {
    const [cartActive, setCartActive] = useState(false)
    const value = { cartActive, setCartActive }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}