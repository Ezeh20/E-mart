import "./Cart-items.scss"



const CartItems = ({ items }) => {
    const { name, quantity} = items
    return (
        <div>
            <p>{name}</p>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItems