import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import Button from "../Button-component/button.component"
import { RiDeleteBin5Line } from 'react-icons/ri'
import './addOrSub.scss'

const AddOrSub = ({ product, itm }) => {
    const { addItems, decreaseQuanity, removeProduct } = useContext(CartContext)
    const increaseQuantity = () => addItems(product)
    const decreaseQuantity = () => decreaseQuanity(product)
    const removePro = () => removeProduct(product)

    return (
        <div className="change">
            <RiDeleteBin5Line className="remove_item2" onClick={removePro} />
            <div className="abf">
                <Button buttonType={'btnCard'} onClick={decreaseQuantity}>-</Button>
                <span>{itm.quantity}</span>
                <Button buttonType={'btnCard'} onClick={increaseQuantity}>+</Button>
            </div>
        </div>
    )
}

export default AddOrSub