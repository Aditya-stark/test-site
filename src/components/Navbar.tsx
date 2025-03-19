import { Link, useLocation } from 'react-router-dom';
import logoImage from "../assets/M-removebg.png";

const Navbar = () => {
  const location = useLocation();
  
  const isActivePath = (path: string) => {
    return location.pathname === path ? "text-[#0ba5bf]" : "text-[#01014b] hover:text-[#0ba5bf]";
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/">
              <img src={logoImage} alt="M Avenue Logo" className="h-16" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActivePath('/')} font-medium`}>
              Home
            </Link>
            <Link to="/about" className={`${isActivePath('/about')} font-medium`}>
              About
            </Link>
            <Link to="/services" className={`${isActivePath('/services')} font-medium`}>
              Services
            </Link>
            <Link to="/goal" className={`${isActivePath('/goal')} font-medium`}>
              Goals
            </Link>
            <Link to="/customers" className={`${isActivePath('/customers')} font-medium`}>
              Customers
            </Link>
            <Link to="/contact" className="bg-[#0ba5bf] text-white px-4 py-2 rounded-full hover:bg-[#00e3f5] transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
