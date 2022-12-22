import { ProductContext } from '../../Context/product.context'
import { useContext } from 'react'
import Products from "../../Components/Product-component/Product.component";
import './shop.scss'



const Shop = () => {
  const { product } = useContext(ProductContext)
  return (
    <div className="Shop">
      <h1 className="title">Shop</h1>
      <div className="products-container container-three">
          {
            product.map(pro => { return (<Products key={pro.id} product={pro} />) })
          }
      </div>
    </div>
  )
};

export default Shop