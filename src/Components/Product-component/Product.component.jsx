import "./Product.style.scss"

const Products = ({ product }) => {
    const { name, imageUrl, price } = product
    return (
        <>
            <div className="product-card">
                <img src={imageUrl} alt={`${name}`} />
                <div className="product_details">
                    <span className="name">{name}</span>
                    <span className="name">{price}</span>
                </div>
            </div>
        </>
    )
}

export default Products