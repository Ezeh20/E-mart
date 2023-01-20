import { ProductContext } from '../../Context/product.context'
import { useContext } from 'react'
import Products from "../../Components/Product-component/Product.component";
import './shop.scss'



const Shop = () => {
  const { categories } = useContext(ProductContext)
  return (
    <div className="Shop">
      {
        Object.keys(categories).map(title => {
          
          return (
            <div key={title} className="abff">
              <h2 className='container-three'>{title}</h2>
              <div className="products-container  container-three">
                {
                  categories[title].map(pro => { return (<Products key={pro.id} product={pro} />) })
                }
              </div>
            </div>)
        })
      }

    </div>
  )
};

export default Shop

