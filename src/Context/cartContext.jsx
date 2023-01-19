import { createContext, useState, useEffect } from "react";



//compare the current cartlist with the product to be added before setting the cartList state
const checkList = (cartList, productToAdd) => {
    //find or check if any item in the cartList already exits using the product id
    const exits = cartList.find((cart) => cart.id === productToAdd.id)

    //if an object with the same id exits, don't add that same product just increase the quantity by 1
    if (exits) {
        //if true map through the cartList then check if any cartList item has the same id with the incoming item
        //if it does, just keep that original item in the cartList but increase it's quantity by 1. 
        return cartList.map((itm) => itm.id === productToAdd.id ?
            { ...itm, quantity: itm.quantity + 1 } : itm
        );
    }
    //This is the case where the cartList does not contain the product to be added, just return an array
    //that holds the current contents in the cartList then add the new product object to the array list but add a new key to that obj then set it's value to 1 
    return [...cartList, { ...productToAdd, quantity: 1 }]
}

//decrese the product quantity
const deQuanity = (cartList, productToDecrease) => {
    const valid = cartList.find((productItem) => productItem.id === productToDecrease.id)

    //while reducing, if the quantity is less than 1, remove that product
    if (valid.quantity === 1) {
        return cartList.filter((filterProduct) => filterProduct.id !== productToDecrease.id)
    }

    //reduce the quantity by 1
    return cartList.map((mappedProducts) => mappedProducts.id === productToDecrease.id ?
        { ...mappedProducts, quantity: mappedProducts.quantity - 1 } : mappedProducts)
}
//Remove/Delete product from cart
const proToRemove = (cartList, productToRemove) => cartList.filter((removeThisProduct) => removeThisProduct.id !== productToRemove.id)

//Clear all products
const clear = (cartList) => cartList.filter((clearA) => clearA.id === -1)

export const CartContext = createContext({
    cartActive: false,
    setCartActive: () => { },
    cartList: [],
    addItems: () => { },
    decreaseQuanity: () => { },
    removeProduct: () => { },
    clearAll: () => { },
    cartCount: 0,
    total: 0
})

export const CartContextProvider = ({ children }) => {
    const [cartActive, setCartActive] = useState(false)
    const [cartList, setCartList] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [total, setTotal] = useState(0)


    //This will the be the function that set's the cartList after checking the conditions
    const addItems = (productToAdd) => {
        setCartList(checkList(cartList, productToAdd))
        localStorage.setItem('MyCart', JSON.stringify(checkList(cartList, productToAdd)))
    }
    //function to reduce product quantity in cart
    const decreaseQuanity = (productToDecrease) => {
        setCartList(deQuanity(cartList, productToDecrease))
        localStorage.setItem('MyCart', JSON.stringify(deQuanity(cartList, productToDecrease)))
    }
    //function to remove product from cart
    const removeProduct = (productToRemove) => {
        setCartList(proToRemove(cartList, productToRemove))
        localStorage.setItem('MyCart', JSON.stringify(proToRemove(cartList, productToRemove)))
    }
    //function to clear all products in cart
    const clearAll = () => {
        setCartList(clear(cartList))
        localStorage.setItem('MyCart', JSON.stringify(clear(cartList)))
    }

    //presist cart with product on page reload
    useEffect(() => {
        setCartList(localStorage.getItem('MyCart') ? JSON.parse(localStorage.getItem('MyCart')) : [])
    }, [])

    //count the items in the cartList, both the items and quantity
    useEffect(() => {
        const counts = cartList.reduce((total, cartist) => total + cartist.quantity, 0)
        setCartCount(counts)
    }, [cartList])

    //calculates the sub-total... useEffect was used to only recaculate only when the cartList updates
    useEffect(() => {
        const Total = cartList.reduce((total, cartList) => total + cartList.quantity * cartList.price, 0)
        setTotal(Total)
    }, [cartList])



    const value = { cartActive, setCartActive, addItems, cartList, cartCount, total, decreaseQuanity, removeProduct, clearAll }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}