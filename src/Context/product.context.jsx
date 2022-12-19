import products from "../Products.json"
import { createContext, useState } from "react"

export const ProductContext = createContext({
    product:[]
})

export const ProductProvider = ({children}) => {
    const [product,setProduct] = useState(products)
    const value ={product}
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}