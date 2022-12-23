import { createContext, useState } from "react";


const checkList = (cartList, productToAdd) => {
    const exits = cartList.find((itm) => itm.id === productToAdd.id)

    if (exits) {
        return cartList.map((car) => car.id === productToAdd.id ?
            { ...cartList, quantity: cartList.quantity + 1 } : cartList
        );
    }

    return [...cartList, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
    cartActive: false,
    setCartActive: () => { },
    cartList: [],
    addItems: () => { }
})

export const CartContextProvider = ({ children }) => {
    const [cartActive, setCartActive] = useState(false)
    const [cartList, setCartList] = useState([])

    const addItems = (productToAdd) => {
        setCartList(checkList(cartList, productToAdd))
    }

    const value = { cartActive, setCartActive, addItems, cartList }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}