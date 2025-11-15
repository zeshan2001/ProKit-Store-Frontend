import { Link } from "react-router-dom"
import CartContext from "../contexts/Cart"
import { useContext, useState } from "react"

const Nav = ({ user, handleLogout }) => {
  const { count } = useContext(CartContext)

  let userOptions = user && (user.role === "customer" ? (
    <header>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <nav>

        <Link to='/cart'><span>{count > 0 && count} </span>Cart</Link>
        <Link to='/products'>Kits</Link>
        <Link>Contact</Link>
        <Link>About</Link>
        <Link onClick={handleLogout} to='/'>Logout</Link>
      </nav>
    </header>
  ) : (
    <header>
      <nav>
        <Link to='/'>Dashboard</Link>
      </nav>
      <nav>
        <Link>Customers</Link>
        <Link>Products</Link>
        <Link onClick={handleLogout} to='/'>Logout</Link>
      </nav>
    </header>
  ))

  const publicOptions = (
    <header>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <nav>
        <Link to='/products'>Kits</Link>
        <Link>Contact</Link>
        <Link>About</Link>
        <Link to='/signin'>Login</Link>
        <Link to='/signup'>SignUp</Link>
      </nav>
    </header>
  )

  return <>
  {user ? userOptions : publicOptions}
  </>
  
}

export default Nav