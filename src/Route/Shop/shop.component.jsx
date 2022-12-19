import { ProductContext } from '../../Context/product.context'
import { useContext } from 'react'
import Products from "../../Components/Product-component/Product.component";
import './shop.scss'



const Shop = () => {
  const { product } = useContext(ProductContext)
  return (
    <div className="Shop">
      <h1>Shop</h1>
      {
        product.map(items => { return (<Products key={items.id} product={items} />) })
      }

    </div>

  )
};

export default Shop