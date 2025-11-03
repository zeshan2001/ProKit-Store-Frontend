import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    navigate('/signin')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name </label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input type="password" name="password" id="password" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password </label>
          <input type="password" name="confirmPassword" id="confirmPassword" onChange={handleChange} />
        </div>
        <button>Sign Up</button>
      </form>

    </div>
  )
}
export default SignUp