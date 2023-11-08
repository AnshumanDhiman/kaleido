import Logo from '../assets/Logo.svg'

const Navbar = () => {
  return (
    <nav className="px-28 py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <div className="text-2xl font-bold">Kaleido UX</div>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
