import { useParams, } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { GetProductById } from "../services/Product"
import CartContext from "../contexts/Cart"

const DetailProduct = () => {
  const {productId} = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(0)

  const increaseQuantity = () => {
    product.quantity > quantity && setQuantity(quantity + 1)
  }
  const decreaseQuantity = () => {
    quantity > 0 && setQuantity(quantity - 1)
  }

  const { cart, setCart, setCount } = useContext(CartContext)
  
  const toggleCart = () => {
    const prevCart = cart
    const isProductExist = prevCart.some(item => item._id === product._id)
    if (!isProductExist) {
      prevCart.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        quantity: quantity
      })
      setCart(prevCart)
      setCount(cart.length)
    }
  }

  useEffect(() =>{
    const getProductById = async () => {
      const data = await GetProductById(productId)
      setProduct(data)
    }

    productId && getProductById()
  }, [])

  return (
    product ? (
      <div>
        <img style={{width: 200+'px'}} src={`${product.image}`} alt="" />
        <p>{product.name}</p>
        <p>{product.description}</p>
        <div>
          <button onClick={increaseQuantity}>+</button>
          <span>{quantity}</span>
          <button onClick={decreaseQuantity}>-</button>
        </div>
        <div>
          <button onClick={toggleCart}>add to cart</button>
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    )
  )
}
export default DetailProduct