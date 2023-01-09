
import Button from '../Button-component/button.component'
import './cartSummary.scss'


const CartSummary = () => {
    return (
        <div className="sub_total_car">
            <div className="car_cart">
                <p className="cart_sum">CART SUMMARY</p>
                <div className="line_checkout">
                    <div className="line_line"></div>
                </div>
            </div>
            <div className="sub_total">
                <div className="sub_sub">
                    <p className="sub_tot">Subtotal</p>
                    <p className="total_amt">#5000</p>
                </div>
                <div className="line_checkout">
                    <div className="line_line"></div>
                </div>
            </div>
            <Button buttonType={`primary`}>Checkout ($9000)</Button>
        </div>
    )
}

export default CartSummary