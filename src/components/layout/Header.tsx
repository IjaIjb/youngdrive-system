// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { FaDonate, FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage 
            ? 'bg-white shadow-md py-1'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src='/logo.png' alt='' 
            className='w-[100px] h-[100px]'/>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Navbar isScrolled={isScrolled} isHomePage={isHomePage} />
            <Link 
              to="/get-involved" 
              className="btn btn-accent flex items-center"
            >
              <FaDonate className="mr-2" />
              Donate
            </Link>
          </div>
          
          <button 
            className="md:hidden text-2xl p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <FaTimes className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} />
            ) : (
              <FaBars className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" className="flex items-center">
              <img src='/logo.png' alt='' className='w-[60px] h-[60px]'/>
            </Link>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <FaTimes className="text-gray-800 text-xl" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto">
            <Navbar 
              isScrolled={true} 
              isHomePage={false} 
              isMobile={true}
              onLinkClick={toggleMobileMenu}
            />
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t">
            <Link 
              to="/get-involved" 
              className="btn btn-accent flex items-center justify-center w-full"
              onClick={toggleMobileMenu}
            >
              <FaDonate className="mr-2" />
              Donate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;