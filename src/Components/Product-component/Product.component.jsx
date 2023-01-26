import "./Product.style.jsx"
import { ProductCard, ProductImg, Proo, ProductDetails, ProBtn } from "./Product.style.jsx"
import Button from "../Button-component/button.component"
import { useContext } from "react"
import { CartContext } from "../../Context/cartContext"
import AddOrSub from "../Add-Decrease_quantity/addOrSub"
import { useNavigate } from "react-router-dom"


const Products = ({ pro }) => {
    const { name, imageUrl, price, id } = pro
    const na = name.replaceAll(' ', '-')
    const { addItems, cartList } = useContext(CartContext)
    const itm = cartList.find((x) => x.id === id)
    const addItemsToCart = () => addItems(pro)

    const navigate = useNavigate()

    const nav = () => {
        navigate(`/${na}`, {
            state: pro
        })
    }

    return (
        <>
            <ProductCard>
                <ProductImg src={imageUrl} alt={`${name}`} className="product-img" onClick={nav} />
                <Proo>
                    <ProductDetails>
                        <span className="name">{
                            name.length > 12 ? name.slice(0, 10) + '...' : name}</span>
                        <span className="name">${price}</span>
                    </ProductDetails>
                    <ProBtn>
                        {
                            itm ? (
                                <AddOrSub product={pro} itm={itm} />
                            ) : <Button onClick={addItemsToCart}>add to cart</Button>
                        }
                    </ProBtn>
                </Proo>

            </ProductCard>

        </>
    )
}

export default Products