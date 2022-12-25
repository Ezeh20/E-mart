import { createContext, useState, useEffect } from "react";



//compare the current cartlist with the product to be added before setting the cartList state
const checkList = (cartList, productToAdd) => {
    //find or check if any item in the cartList already exits using the product id
    const exits = cartList.find((cart) => cart.id === productToAdd.id)

    //if an object with the same id exits, don't add that same product just increase the quantity by 1
    if (exits) {
        return cartList.map((itm) => itm.id === productToAdd.id ?
            { ...itm, quantity: itm.quantity + 1 } : itm
        );
    }

    //This is the case where the cartList does not contain the product to be added, just return an array
    //that holds the current contents in the cartList then add the new product object to the array list but add a new key to that obj then set it's value to 1 
    return [...cartList, { ...productToAdd, quantity: 1 }]
}


export const CartContext = createContext({
    cartActive: false,
    setCartActive: () => { },
    cartList: [],
    addItems: () => { },
    cartCount: 0
})

export const CartContextProvider = ({ children }) => {
    const [cartActive, setCartActive] = useState(false)
    const [cartList, setCartList] = useState([])
    const [cartCount, setCartCount] = useState(0)


    //This will the be the function that set's the cartList after checking the conditions
    const addItems = (productToAdd) => {
        setCartList(checkList(cartList, productToAdd))
    }

    //count the items in the cartList, both the items and quantity
    useEffect(() => {
        const counts = cartList.reduce((total, cartList) => total + cartList.quantity, 0)
        setCartCount(counts)
    }, [cartList])



    const value = { cartActive, setCartActive, addItems, cartList, cartCount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}