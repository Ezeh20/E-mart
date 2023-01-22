import { ProductContext } from '../../Context/product.context'
import CategoriesPreview from '../../Components/Categories-preview/Cartigories-preview';
import { useContext } from "react";


const CategoriesPreviewRoute = () => {
    const { categories } = useContext(ProductContext)
    return (
        <div className="Shop">
            {
                Object.keys(categories).map(title => {
                    const products = categories[title]
                   
                    return (
                        <CategoriesPreview key={title} products={products} title={title} />
                    )
                })
            }
        </div>

    )
}

export default CategoriesPreviewRoute