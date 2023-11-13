import Logo from '../assets/logo.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-28 py-8">
      <div className="mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <div className="text-2xl font-bold">Kaleido UX</div>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
