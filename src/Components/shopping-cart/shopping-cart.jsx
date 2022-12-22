import { MdOutlineShoppingBag } from "react-icons/md"
import { useContext } from "react"
import { CartContext } from "../../Context/cartContext"
import "./shopping-cart.scss"


const ShoppingCart = () => {
    const { setCartActive } = useContext(CartContext)

    return (
        <div className="shop-con">
            <div className="shopping-bag" onClick={() => setCartActive(current => !current)}>
                <MdOutlineShoppingBag className="shop-cart" />
                <div className="cart-count">
                    <span className="num">0</span>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart