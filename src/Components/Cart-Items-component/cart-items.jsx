import "./Cart-items.scss"



const CartItems = ({ items }) => {
    const { name, imageUrl, price, quantity } = items
    const priceCart = price * quantity

  

   
    return (
        <div className="cartlist-list">
            <img src={imageUrl} alt={`${name}`} className="cart-img"/>
            <div className="product-cart">
                <span>{name}</span>
                <div className="total">
                    <span>{quantity} x ${price} </span>
                </div>
            </div>
        </div>
    )
}

export default CartItems