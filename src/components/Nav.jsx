import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <nav>
        <Link>Category</Link>
        <Link>Contact</Link>
        <Link>About</Link>
        <Link to='/signin'>Login</Link>
        <Link to='/signup'>SignUp</Link>
      </nav>
    </header>
  )
  
}

export default Nav