import Button from "../Button-component/button.component"
import style from "./checkout.module.scss"

const Checkout = () => {
    return (
        <div className={style.checkout}>
            <div className={style.checkoutContainer}>
                <div className={style.checkoutItems}></div>
                <div className={style.btn}>
                    <Button buttonType={`checkout`}>Move to checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default Checkout