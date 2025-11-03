import './App.css'
import Nav from './components/Nav'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

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
      <Nav />
      <main>
        <Routes>
          <Route path='/' element = { <Home /> } />
          <Route path='/signup' element = { <SignUp /> }/>
          <Route path='/signin' element = { <SignIn /> }/>
        </Routes>
      </main>
    </>
  )
}

export default App
