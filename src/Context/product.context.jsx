import { createContext, useState, useEffect } from "react"
import { downloadCollectionAndDocument } from "../utils/firebase/firebase.utils"



export const ProductContext = createContext({
    categories: {}
})


export const ProductProvider = ({ children }) => {
    const [categories, setCategories] = useState({})
    useEffect(() => {
        const categoriesMap = async () => {
            const categories = downloadCollectionAndDocument()
            setCategories(categories)
        }
        categoriesMap()
    }, [])
    const value = { categories, setCategories }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}