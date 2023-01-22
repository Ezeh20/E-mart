import { ProductContext } from '../../Context/product.context'
import Products from '../Product-component/Product.component';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

const CategoryO = () => {
    const { category } = useParams()
    const { categories } = useContext(ProductContext)
    const [products, setProducts] = useState([])
   
    useEffect(() => {
        setProducts(categories[category])
    }, [categories, category])
    return (
        <div className="categories-pre container-three">
            <h2 className='title-tit'>
                <span>{category.toUpperCase()}</span>
            </h2>
            <div className="products-container ">
                {
                    products && products.map((pro) => <Products key={pro.id} pro={pro} />)
                }
            </div>

        </div>
    )
}

export default CategoryO