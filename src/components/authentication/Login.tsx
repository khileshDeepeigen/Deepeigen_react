import { useState } from 'react';
import type { FormEvent } from 'react';
import './auth.css'; // Import the external CSS file
import { Link } from 'react-router-dom';

// Define the shape for the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  profession: string;
  phoneNo: string;
  password: string;
  reEnterPassword: string;
  country: string;
}

const Login: React.FC = () => {

  const [rememberMe, setRememberMe] = useState('')
  
  // State to hold all form data
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    profession: '',
    phoneNo: '',
    password: '',
    reEnterPassword: '',
    country: '',
  });

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

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
    e.preventDefault();
    console.log('Registration Data:', formData);
    // In a real application, you would send this data to an API
  };

  // List of countries (minimal example)
  const countries = [
    'Select your country of residence',
    'United States',
    'Canada',
    'India',
    'United Kingdom',
    // ... add more countries
  ];

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
            <Link to="#" className='login__forgotPassword'>
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