import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <header>
      <nav>
        <Link>Home</Link>
      </nav>
      <nav>
        <Link>Register</Link>
        <Link>All</Link>
      </nav>
    </header>
  )
  
}

export default Nav