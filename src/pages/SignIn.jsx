import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { SignInUser } from '../services/Auth'

const SignIn = ({ setUser }) => {
  const location = useLocation()
  const message = location.state?.msg

  const initialState = {
    email: '',
    password: '',
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    setFormValues(initialState)
    navigate('/')

  }

  return (
    <div>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input type="password" name="password" id="password" onChange={handleChange} />
        </div>
        <button>Log In</button>
      </form>

    </div>
  )
}
export default SignIn