import { ProductContext } from '../../Context/product.context'
import Products from '../Product-component/Product.component';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import Containerthree from '../Containers/ContainerThree';
import { CategoriesPre, Tittle,ProductsContainer  } from '../Categories-preview/categories.style';

const CategoryO = () => {
    const { category } = useParams()
    const { categories } = useContext(ProductContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categories[category])
    }, [categories, category])
    return (
        <CategoriesPre>
            <Containerthree>
                <Tittle>
                    <span>{category.toUpperCase()}</span>
                </Tittle>
                <ProductsContainer>
                    {
                        products && products.sort(() => Math.random() - 0.5).map((pro) => <Products key={pro.id} pro={pro} />)
                    }
                </ProductsContainer>
            </Containerthree>
        </CategoriesPre>
    )
}

export default CategoryO