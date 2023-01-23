import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context/cartContext"

const ProductInfo = () => {
    const { addItems, cartList } = useContext(CartContext)
    const location = useLocation()
    const { name, price, id } = location.state

    const itm = cartList.find(x => x.id === id)
    return (
        <div>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h1>{id}</h1>
            {
                itm ? 'item in cart' : "e no dey"
            }
        </div>
    )
}

export default ProductInfo