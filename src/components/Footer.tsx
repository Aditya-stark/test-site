import { Link } from 'react-router-dom';
import logoImage from "../assets/M-removebg.png";

const Footer = () => {
  return (
    <footer className="bg-[#01014b] text-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-4">
              <img src={logoImage} alt="M Avenue Logo" className="h-16 brightness-0 invert" />
            </div>
            <p className="text-[#00e3f5] font-medium">INSPIRE. INNOVATE. CONNECT.</p>
            <p className="mt-4 text-gray-300">
              Leading the way in IT solutions and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 border-b border-[#0ba5bf] pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">Services</Link></li>
              <li><Link to="/goal" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">Our Goals</Link></li>
              <li><Link to="/customers" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">Customers</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 border-b border-[#0ba5bf] pb-2">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">SEO</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">SMO</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">Performance Marketing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">Content Marketing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 border-b border-[#0ba5bf] pb-2">Contact Us</h4>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0ba5bf]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@mavenuetechnosoft.com
              </p>
              <p className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0ba5bf]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 9810750505
              </p>
              <p className="flex items-start text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-[#0ba5bf]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                123 Tech Park, Silicon Avenue<br />
                Mumbai, Maharashtra 400001
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} M AVENUE TECHNOSOFT PVT LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
