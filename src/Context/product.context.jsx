import { createContext, useState, useEffect } from "react"
import { uploadCollectionAndDocument } from "../utils/firebase/firebase.utils"
import SHOP_DATA from "../shop-data"


export const ProductContext = createContext({
    product: []
})


export const ProductProvider = ({ children }) => {
    useEffect(() => {
        uploadCollectionAndDocument("Categories", SHOP_DATA)
    }, [])
    const [product, setProduct] = useState([])
    const value = { product, setProduct }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}