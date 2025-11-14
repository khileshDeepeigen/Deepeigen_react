import { useState } from 'react';
import type { FormEvent } from 'react';
import './auth.css'; // Import the external CSS file
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { setUser } from '../../redux/slices/auth';

// Define the shape for the form data
interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [rememberMe, setRememberMe] = useState(false)

  // State to hold all form data
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

    // ---- MOCK TEST CREDENTIALS ----
  const TEST_EMAIL = "test@example.com";
  const TEST_PASSWORD = "123456";

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e: FormEvent) => {
    console.log("this is running")
    e.preventDefault();

    if (formData.email === TEST_EMAIL && formData.password === TEST_PASSWORD){
      console.log("formData.email", formData.email)
      dispatch(setUser({ email: formData.email, rememberMe }))
      navigate('/user_dashboard')
    } else {
    console.log("1this is running")
    }
  };


  return (
    <div className="register-page">
      {/* Left panel with branding and purple gradient */}
      <div className="register-panel-left">
        <div className="slogan">
          <h1>BRILLIANCE</h1>
          <h1>INITIATED</h1>
        </div>
      </div>

      {/* Right panel with the registration form */}
      <div className="register-panel-right">

        <h1 className="register-title">Login</h1>
        <p className="register-subtitle">Let's continue the learning</p>

        <form className="register-form" onSubmit={handleSubmit}>


          <div className="form-group">
            <label htmlFor="email">Email<span className="required">*</span></label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group password-group">
            <label htmlFor="password">Password<span className="required">*</span></label>
            <div className="password-input-container">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {/* Icon Placeholder (using text for simplicity, could be an Eye icon) */}
                {showPassword ? '👁️' : '🔒'}
              </button>
            </div>
          </div>

          <div className='login__rememberMeForm'>
            <label className='login__rememberMe'>
                <input 
                className='remember_checkbox'
                type="checkbox"
                checked = {rememberMe}
                onChange={(e)=> setRememberMe(e.target.checked)} 
                />
              <span>Remember me</span>
            </label>
            <Link to="/forgot_password" className='login__forgotPassword'>
              Forgot password ?
            </Link>
          </div>

          <button type="submit" className="register-button">
            Login
          </button>
        </form>

        <p className="login-link-container">
          Don't have an have an account? <Link to="/register" className="login-link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;