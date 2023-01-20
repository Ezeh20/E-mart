import './categories.style.scss'


import Products from '../Product-component/Product.component'

const CategoriesPreview = ({ title, products }) => {
    return (
        <div className="categories-pre container-three">
            <h2 className='title-tit'>
                <span>{title.toUpperCase()}</span>
            </h2>
            <div className="products-container ">
                {
                    products.filter((_, index) => index < 4 ).map((pro) => <Products key={pro.id} pro={pro} />)
                }
            </div>

        </div>
    )
}

export default CategoriesPreview