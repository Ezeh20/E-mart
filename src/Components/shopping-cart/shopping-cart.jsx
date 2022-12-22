import { MdOutlineShoppingBag } from "react-icons/md"
import "./shopping-cart.scss"


const ShoppingCart = () => {
    return (
        <div className="shop-con">
            <div className="shopping-bag">
                <MdOutlineShoppingBag className="shop-cart" />
                <div className="cart-count">
                    <span className="num">20</span>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart