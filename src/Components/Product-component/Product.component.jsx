import "./Product.style.scss"
import Button from "../Button-component/button.component"

const Products = ({ product }) => {
    const { name, imageUrl, price } = product
    return (
        <>
            <div className="product-card">
                <img src={imageUrl} alt={`${name}`} className="product-img" />
                <div className="product_details">
                    <span className="name">{name}</span>
                    <span className="name">${price}</span>
                </div>
                <div className="pro_btn">
                    <Button className="cart" buttonType={'addToCart'}>add to cart</Button>
                </div>
            </div>
        </>
    )
}

export default Products