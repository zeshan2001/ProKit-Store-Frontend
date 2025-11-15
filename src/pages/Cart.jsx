import { useContext, useEffect, useState } from "react"
import CartContext from "../contexts/Cart"
import { GetAllProducts } from "../services/Product"

const Cart = () => {
  const { cart } = useContext(CartContext)
  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const data = await GetAllProducts()
  //     let cartProducts = []
  //     cart.forEach((product) => {
  //       cartProducts.push(data.find((item) => item._id === product._id))
  //     })
  //     cartProducts && setProducts(cartProducts)
      
  //   }
  //   getProducts()
  // }, [])
  // products.length && console.log(products)
  return (
    <div>
      {
        cart.length ? (
          cart.map((product) => {
            return <div key={product._id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
            </div>
          })
        ) : (
          <p>Empty</p>
        )
      }
    </div>
  )
}

export default Cart