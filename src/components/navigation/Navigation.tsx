import "./navigation.css";
import logo_svg from "../../assets/Logo/Vector 7.svg"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav ${open ? "is-open" : ""}`}>
      <div className="nav__container">

        {/* Logo + Text */}
        <Link to="/" className="nav__logobox" onClick={() => setOpen(false)}>
          <img
            className="nav__logo"
            src={logo_svg}
            alt="Deep Eigen AI Labs"
          />
          <div className="nav__logotext">
            <h2>Deep Eigen</h2>
            <h3>AI Labs</h3>
          </div>
        </Link>


        {/* Desktop Navigation Links */}
        <div className="nav__links" role="navigation" aria-label="Main">
          <button className="nav__link">
            Courses
            <svg className="chevron" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.5766 7.5L10.7432 12.5L4.90991 7.5" /></svg>
          </button>
          <a href="#" className="nav__link">AI Labs</a>
          <a href="#" className="nav__link">Team</a>
          <a href="#" className="nav__link">Pricing</a>
          <button className="nav__link">
            Company
            <svg className="chevron" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.5766 7.5L10.7432 12.5L4.90991 7.5" /></svg>
          </button>
        </div>

        {/* CTA Buttons (desktop) */}
        <div className="nav__actions">
          <Link to="/login" className="btn btn--outline" onClick={() => setOpen(false)}>
            Login
          </Link>
          <Link to="/register" className="btn btn--primary" onClick={() => setOpen(false)}>
            Register
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A212F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div className="nav__mobile" role="dialog" aria-label="Mobile menu">
        <div className="nav__group">
          <button className="nav__link">Courses <svg className="chevron" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.5766 7.5L10.7432 12.5L4.90991 7.5" /></svg></button>
          <a href="#" className="nav__link">AI Labs</a>
          <a href="#" className="nav__link">Team</a>
          <a href="#" className="nav__link">Pricing</a>
          <button className="nav__link">Company <svg className="chevron" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.5766 7.5L10.7432 12.5L4.90991 7.5" /></svg></button>
        </div>
        <div className="nav__mobile-actions">
          <button className="btn btn--outline" onClick={() => setOpen(false)}>Login</button>
          <button className="btn btn--primary" onClick={() => setOpen(false)}>Register</button>
        </div>
      </div>
    </nav>
  );
}
