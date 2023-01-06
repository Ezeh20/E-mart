import "./Checkout-style.scss"
import CheckoutSingle from "../../Components/Checkout-single-card/Checkout-single"

import { useContext } from "react"
import { CartContext } from "../../Context/cartContext"

const CheckoutPage = () => {

    const { cartList } = useContext(CartContext)

    return (
        <div className="con-top container">
            {
                cartList.map((singles) => { return (<CheckoutSingle key={singles.id} singles={singles} />) })
            }
        </div>
    )
}

export default CheckoutPage