import './App.css'
import Nav from './components/Nav'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Products from './pages/Products'
import DetailProduct from './pages/DetailProduct'
import Cart from './pages/Cart'

function App() {
  
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) checkToken()
  }, [])

  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <>
      <Nav user = {user} handleLogout = {handleLogout} />
      <main>
        <Routes>
          <Route path='/' element = { <Home user = { user }/> } />
          <Route path='/products' element= {<Products />}/>
          <Route path='products/:productId' element= {<DetailProduct />}/>
          <Route path='/cart' element = { <Cart /> }/>
          <Route path='/signup' element = { <SignUp /> }/>
          <Route path='/signin' element = { <SignIn setUser = { setUser }/> }/>
        </Routes>
      </main>
    </>
  )
}

export default App
