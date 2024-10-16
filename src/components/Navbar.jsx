import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-6 py-4 md:px-28 md:py-8">
      <div className="mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <div className="text-2xl font-bold">Kaleido UX</div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Full menu for larger screens */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link to="/" className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu - shown when isOpen is true */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-500">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
