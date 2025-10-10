import { useState } from 'react';
import type { FormEvent } from 'react';
import './register.css'; // Import the external CSS file

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

const Register: React.FC = () => {
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
        <div className="logo-container">
          {/* Placeholder for the logo/branding text */}
          <div className="logo-text">
            <span className="logo-text-eal">EAL</span> Deep Eigen <br /> AI LABS
          </div>
        </div>
        <div className="slogan">
          BRILLIANCE <br /> INITIATED
        </div>
      </div>

      {/* Right panel with the registration form */}
      <div className="register-panel-right">
        <h1 className="register-title">Register</h1>
        <p className="register-subtitle">Learn from the best resources.</p>

        <form className="register-form" onSubmit={handleSubmit}>
          {/* --- Row 1: First Name / Last Name --- */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name<span className="required">*</span></label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name<span className="required">*</span></label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* --- Row 2: Email / Username --- */}
          <div className="form-row">
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
            <div className="form-group">
              <label htmlFor="username">Username<span className="required">*</span></label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* --- Row 3: Profession / Phone No --- */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="profession">Profession<span className="required">*</span></label>
              <input
                id="profession"
                type="text"
                name="profession"
                placeholder="Enter profession"
                value={formData.profession}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo">Phone No.<span className="required">*</span></label>
              <input
                id="phoneNo"
                type="tel"
                name="phoneNo"
                placeholder="Enter phone no."
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* --- Row 4: Password / Re-enter Password --- */}
          <div className="form-row">
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

            <div className="form-group">
              <label htmlFor="reEnterPassword">Re-enter Password<span className="required">*</span></label>
              <input
                id="reEnterPassword"
                type="password"
                name="reEnterPassword"
                placeholder="Re-enter password"
                value={formData.reEnterPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* --- Row 5: Current Residence (Select) --- */}
          <div className="form-group full-width">
            <label htmlFor="country">Your current residence</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={formData.country === 'Select your country of residence' || formData.country === '' ? 'placeholder-option' : ''}
              required
            >
              {countries.map(country => (
                <option
                  key={country}
                  value={country === 'Select your country of residence' ? '' : country}
                  disabled={country === 'Select your country of residence'}
                >
                  {country}
                </option>
              ))}
            </select>
            {/* The select element needs a custom down arrow in CSS to match the image */}
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <p className="login-link-container">
          Already have an account? <a href="/login" className="login-link">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;