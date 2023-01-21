import { ProductContext } from '../../Context/product.context'
import { useContext } from 'react'
import CategoriesPreview from '../../Components/Categories-preview/Cartigories-preview';
import './shop.scss'



const Shop = () => {
  const { categories } = useContext(ProductContext)
  return (
    <div className="Shop">
     
    </div>

  )
};


export default Shop

