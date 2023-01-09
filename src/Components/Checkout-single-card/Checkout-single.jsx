import "./checkout-single.scss"

const CheckoutSingle = ({ singles }) => {
    const { name, imageUrl, price, quantity } = singles
    return (
        <div className="singles">
            <div className="img-singles">
                <img src={imageUrl} alt={`${name}`} className="img-si" />
            </div>
            <div className="content-singles">
                <div className="content-sin">
                    <span className="item-sin">{name}</span>
                    <span className="item-sin">{quantity}</span>
                    <p className="title">Price</p>
                    <span className="item-sin">{price}</span>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSingle