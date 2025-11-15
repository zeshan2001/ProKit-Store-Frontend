import { createContext, useState } from "react"

const CartContext = createContext([])

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)

  return (
    <CartContext.Provider value = {{cart, setCart, count, setCount}}>{children}</CartContext.Provider>
  )
}

export default CartContext