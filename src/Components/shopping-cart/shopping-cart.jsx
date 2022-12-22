import { MdOutlineShoppingBag } from "react-icons/md"
import "./shopping-cart.scss"


const ShoppingCart = () => {
    return (
        <div className="shop-con">
            <div className="shopping-bag">
                <MdOutlineShoppingBag  className="shop-cart"/>
                <span className="num">200</span>
            </div>
        </div>
    )
}

export default ShoppingCart