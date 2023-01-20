import "./Product.style.scss"
import Button from "../Button-component/button.component"
import { useContext } from "react"
import { CartContext } from "../../Context/cartContext"
import AddOrSub from "../Add-Decrease_quantity/addOrSub"

const Products = ({ product }) => {
    const { name, imageUrl, price, id } = product
    const { addItems, cartList } = useContext(CartContext)
    const itm = cartList.find((x) => x.id === id)
    
    const addItemsToCart = () => addItems(product)
    return (
        <>
            <div className="product-card">
                <img src={imageUrl} alt={`${name}`} className="product-img" />
                <div className="proo">
                    <div className="product_details">
                        <span className="name">{
                        name.length > 10 ? name.slice(0, 10) + '...' : name}</span>
                        <span className="name">${price}</span>
                    </div>
                    <div className="pro_btn">
                        {
                            itm ? (
                                <AddOrSub product={product} itm={itm} />
                            ) : <Button className={`cart`} onClick={addItemsToCart}>add to cart</Button>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Products