import { createContext, useState } from "react"
import products from "../Products.json"


export const ProductContext = createContext({
    product: []
})


export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(products)
    const value = { product, setProduct }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}