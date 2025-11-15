import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../contexts/Cart"

const Product = ({ product }) => {

  const { cart, setCart } = useContext(CartContext)
  
  const toggleCart = () => {
    const prevCart = cart
    const isProductExist = prevCart.some(item => item._id === product._id)
    if (!isProductExist) {
      prevCart.push({
        _id: product._id,
        quantity: 1
      })
      setCart(prevCart)
    }
  }

  return <>
    <Link to={`${product._id}`}>
      <div className="product-class">
        <p>{product.name}</p>
        <p>{product.description}</p>
      </div>
    </Link>
    <button onClick = {toggleCart}>add to cart</button>
  </>
  }
export default Product