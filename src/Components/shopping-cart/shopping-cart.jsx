import { MdOutlineShoppingBag } from "react-icons/md"
import { useContext } from "react"
import { CartContext } from "../../Context/cartContext"
import "./shopping-cart.scss"


const ShoppingCart = () => {
    const { setCartActive, cartList } = useContext(CartContext)
    const bs = cartList.length

    return (
        <div className="shop-con">
            <div className="shopping-bag" onClick={() => setCartActive(current => !current)}>
                <MdOutlineShoppingBag className="shop-cart" />
                <div className="cart-count">
                    <span className="num">{bs}</span>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart