// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Youngdrive</h3>
            <p className="mb-4 text-gray-300">Empowering Youth to Drive Africa's SDG Transformation</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Initiatives</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/initiatives#tech-africa" className="hover:text-white transition-colors">Tech Africa</Link></li>
              <li><Link to="/initiatives#education-for-all" className="hover:text-white transition-colors">Education for All</Link></li>
              <li><Link to="/initiatives#climate-action" className="hover:text-white transition-colors">Climate Action Warriors</Link></li>
              <li><Link to="/initiatives#gender-advocacy" className="hover:text-white transition-colors">Gender Advocacy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/stories" className="hover:text-white transition-colors">Africa Stories</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/get-involved" className="hover:text-white transition-colors">Get Involved</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: info@youngdrive.org</p>
            <p className="text-gray-300 mb-2">Phone: +2347037224570</p>
            <p className="text-gray-300">Abuja, Nigeria</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p className="mb-2">© {currentYear} Youngdrive. All rights reserved.</p>
          <p className="flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> for Africa's youth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;