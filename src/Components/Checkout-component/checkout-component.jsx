import Button from "../Button-component/button.component"
import CartItems from "../Cart-Items-component/cart-items"
import { useContext } from "react"
import { CartContext } from "../../Context/cartContext"
import style from "./checkout.module.scss"

const Checkout = () => {

    const { cartList } = useContext(CartContext)
    return (
        <div className={style.checkout}>
            <div className={style.checkoutContainer}>
                <div className={style.checkoutItems}>
                    {
                        cartList.map(items => { return (<CartItems key={items.id} items={items} />) })
                    }
                </div>
                <div className={style.btn}>
                    <Button buttonType={`checkout`}>Move to checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default Checkout