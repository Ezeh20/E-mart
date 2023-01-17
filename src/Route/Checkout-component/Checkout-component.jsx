import "./Checkout-style.scss"
import CheckoutSingle from "../../Components/Checkout-single-card/Checkout-single"
import CartSummary from "../../Components/CartSummary/cartSummary"

import { useContext } from "react"
import { CartContext } from "../../Context/cartContext"

const CheckoutPage = () => {

    const { cartList, cartCount, total } = useContext(CartContext)

    return (
        <div className="con-top container">
            <div className="sub_total_top">
                <p className="subtotal">Subtotal</p>
                <p className="price">${total}</p>
            </div>
            <div className="items">
                <div className="cart">
                    <p className="cart_numb">CART({cartCount})</p>
                    {
                        cartList.length < 1 ? <p className="emptyCart">Your cart is empty</p> : ""
                    }
                </div>
                {
                    cartList.map((singles) => { return (<CheckoutSingle key={singles.id} singles={singles} />) })
                }
            </div>
            <div className="sub_total_bottom">
                <CartSummary />
            </div>

        </div>
    )
}

export default CheckoutPage