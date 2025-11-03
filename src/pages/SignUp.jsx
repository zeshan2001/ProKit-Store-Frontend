const SignUp = () => {
  return (
    <div>
      <form >
        <div>
          <label htmlFor="name">Name </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password </label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
        <button>Sign Up</button>
      </form>

    </div>
  )
}
export default SignUp