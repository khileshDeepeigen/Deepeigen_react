import { useState } from "react";
import { Link } from "react-router-dom";
import logo_svg from "../../assets/Logo/Vector 7.svg";

export default function Navigation() {
  const COURSES = [
    { id: 1, name: "AI-1.0Z: Introduction to Fundamentals of Machine Learning", href: "/course_details" },
    { id: 2, name: "CV-1.0X: Introduction to Computer Vision", href: "/course_details" },
    { id: 3, name: "RL-1.0Y: Fundamentals of Reinforcement Learning", href: "/course_details" },
    { id: 4, name: "CV-2.0X: Introduction to Visual Odometry and Mapping", href: "/course_details" },
    { id: 5, name: "GenAI-1.0X: Generative AI", href: "/course_details" },
    { id: 6, name: "MO-1.0x: Introduction to Mathematical Optimization", href: "/course_details" },
  ];

  const COMPANY = [
    { id: 1, name: "Media", href: "/media" },
    { id: 2, name: "Career", href: "/career" },
    { id: 3, name: "Contact Us", href: "/contactus" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 z-50">
      <div className="mx-auto flex justify-between items-center px-[10vw] py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo_svg} alt="Deep Eigen AI Labs" className="w-15 h-auto" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 leading-tight">Deep Eigen</h2>
            <h3 className="text-sm text-gray-600 font-medium">AI Labs</h3>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Courses Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-800 hover:text-blue-600 font-medium">
              Courses
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg mt-0 w-80 py-3 z-50">
              {COURSES.map((course) => (
                <Link
                  key={course.id}
                  to={course.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="#" className="text-gray-800 hover:text-blue-600 font-medium">AI Labs</Link>
          <Link to="/team" className="text-gray-800 hover:text-blue-600 font-medium">Team</Link>
          <Link to="/pricing" className="text-gray-800 hover:text-blue-600 font-medium">Pricing</Link>

          {/* Company Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-800 hover:text-blue-600 font-medium">
              Company
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg mt-0 w-48 py-3 z-50">
              {COMPANY.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <Link to="/login" className="px-5 py-2 border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition">
            Login
          </Link>
          <Link to="/register" className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 border border-gray-300 rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          <button
            onClick={() => setCoursesOpen(!coursesOpen)}
            className="flex justify-between w-full text-gray-800 font-medium"
          >
            Courses
            <svg
              className={`w-4 h-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {coursesOpen && (
            <div className="pl-4 space-y-2">
              {COURSES.map((c) => (
                <Link key={c.id} to={c.href} className="block bg-gray-50 text-gray-700 hover:text-blue-600">
                  {c.name}
                </Link>
              ))}
            </div>
          )}

          <Link to="#" className="block text-gray-800 font-medium">AI Labs</Link>
          <Link to="/team" className="block text-gray-800 font-medium">Team</Link>
          <Link to="/pricing" className="block text-gray-800 font-medium">Pricing</Link>

          <button
            onClick={() => setCompanyOpen(!companyOpen)}
            className="flex justify-between w-full text-gray-800 font-medium"
          >
            Company
            <svg
              className={`w-4 h-4 transition-transform ${companyOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {companyOpen && (
            <div className="pl-4 space-y-2">
              {COMPANY.map((c) => (
                <Link key={c.id} to={c.href} className="block bg-gray-50 text-gray-700 hover:text-blue-600">
                  {c.name}
                </Link>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="pt-4 flex flex-col gap-2">
            <Link to="/login" className="border border-blue-600 text-blue-600 font-semibold rounded-md py-2 text-center hover:bg-blue-600 hover:text-white transition">
              Login
            </Link>
            <Link to="/register" className="bg-blue-600 text-white font-semibold rounded-md py-2 text-center hover:bg-blue-700 transition">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
