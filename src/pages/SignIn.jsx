const SignIp = () => {
  return (
    <div>
      <form >
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input type="password" name="password" id="password" />
        </div>
        <button>Log In</button>
      </form>

    </div>
  )
}
export default SignIp