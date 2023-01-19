import { createContext, useState } from "react"
import SHOP_DATA from "../shop-data"


export const ProductContext = createContext({
    product: []
})


export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    const value = { product, setProduct }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}