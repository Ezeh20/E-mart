import Button from "../Button-component/button.component"
import CartItems from "../Cart-Items-component/cart-items"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../Context/cartContext"
import style from "./checkout.module.scss"

const Checkout = () => {

    const { cartList } = useContext(CartContext)
    const navigate = useNavigate()

    const nav = () => {
        navigate("checkout")
    }
    const navShop = () => {
        navigate("shop")
    }
    return (
        <div className={style.checkout}>
            <div className={style.checkoutContainer}>
                <div className={style.checkoutItems}>
                    {
                        cartList.length < 1 ? <p className={style.empCart}> Your cart is empty</p> :
                            cartList.map(items => { return (<CartItems key={items.id} items={items} />) })
                    }
                </div>
                <div className={style.btn}>
                    {
                        cartList.length < 1 ? <Button buttonType={`checkout`} onClick={navShop}>Shop Now</Button>
                            : <Button buttonType={`checkout`} onClick={nav}>Move to checkout</Button>
                    }
                </div>
            </div>
        </div >
    )
}

export default Checkout