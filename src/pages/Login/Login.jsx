import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {
  return (
    <div className='login' >
      <img src={logo} alt="logo" className='login-logo' />
      <div className="div-form">
        <h1>Sign Up</h1>
        <form >
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email ' />
          <input type="password" placeholder='Password' />
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Remember Me"></label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login