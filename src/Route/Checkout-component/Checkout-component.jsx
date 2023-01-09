import "./Checkout-style.scss"
import CheckoutSingle from "../../Components/Checkout-single-card/Checkout-single"

import { useContext } from "react"
import { CartContext } from "../../Context/cartContext"

const CheckoutPage = () => {

    const { cartList } = useContext(CartContext)

    return (
        <div className="con-top container">
            <div className="sub_total_top">
                <p className="subtotal">Subtotal</p>
                <p className="price">#8800</p>
            </div>
            <div className="items">
                {
                    cartList.map((singles) => { return (<CheckoutSingle key={singles.id} singles={singles} />) })
                }
            </div>
            <div className="sub_total_bottom">
                <p className="subtotal">Subtotal</p>
                <p className="price">#8800</p>
            </div>

        </div>
    )
}

export default CheckoutPage