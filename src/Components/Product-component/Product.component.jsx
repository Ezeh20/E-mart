import "./Product.style.scss"
import Button from "../Button-component/button.component"
import { useContext } from "react"
import { CartContext } from "../../Context/cartContext"

const Products = ({ product }) => {
    const { name, imageUrl, price } = product

    const { addItems } = useContext(CartContext)

    const addItemsToCart = () => addItems(product)
    return (
        <>
            <div className="product-card">
                <img src={imageUrl} alt={`${name}`} className="product-img" />
                <div className="product_details">
                    <span className="name">{name}</span>
                    <span className="name">${price}</span>
                </div>
                <div className="pro_btn">
                    <Button className="cart" buttonType={'addToCart'} onClick={addItemsToCart}>add to cart</Button>
                </div>
            </div>
        </>
    )
}

export default Products