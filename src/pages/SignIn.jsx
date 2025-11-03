import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
  const initialState = {
    email: '',
    password: '',
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    setFormValues(initialState)
    navigate('/')

  }

  return (
    <div>
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