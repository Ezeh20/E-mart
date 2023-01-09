import "./checkout-single.scss"

import { RiDeleteBin5Line } from 'react-icons/ri'

const CheckoutSingle = ({ singles }) => {
    const { name, imageUrl, price, quantity } = singles
    return (
        <div className="singles">
            <div className="singles_top">
                <div className="img-singles">
                    <img src={imageUrl} alt={`${name}`} className="img-si" />
                </div>
                <div className="content-singles">
                    <div className="content-sin">
                        <span className="item-sin">{name}</span>
                        <span className="item-sin">${price}</span>
                    </div>
                </div>
            </div>
            <div className="singles_bottom">
                <RiDeleteBin5Line className="remove_item" />
                <div className="add_sub_item">
                    <button className="ma minus">-</button>
                    <p className="quantity_I">{quantity}</p>
                    <button className="ma add">+</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSingle