import "./checkout-single.scss"
import AddAlt from "../AddAlt/addAlt"

const CheckoutSingle = ({ product }) => {
    const { name, imageUrl, price } = product
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
            <AddAlt product={product}/>
        </div>
    )
}

export default CheckoutSingle