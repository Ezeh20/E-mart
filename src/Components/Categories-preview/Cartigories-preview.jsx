import './categories.style.jsx'
import { CategoriesPre, ProductsContainer, Tittle } from './categories.style.jsx'
import Containerthree from '../Containers/ContainerThree.jsx'
import { useNavigate } from 'react-router-dom'
import Products from '../Product-component/Product.component'

const CategoriesPreview = ({ title, products }) => {

    const navigate = useNavigate()
    const nav = () => {
        navigate(title)
    }
    return (
        <CategoriesPre>
            <Containerthree>
                <Tittle>
                    <span onClick={nav}>{title.toUpperCase()}</span>
                </Tittle>
                <ProductsContainer>
                    {
                        products.filter((_, index) => index < 4).sort(() => Math.random() - 0.5).map((pro) => <Products key={pro.id} pro={pro} />)
                    }
                </ProductsContainer>
            </Containerthree>
        </CategoriesPre>
    )
}

export default CategoriesPreview