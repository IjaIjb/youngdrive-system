// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { FaDonate } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage 
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-2">
            <span className="font-heading font-bold text-xl">Y</span>
          </div>
          <span className={`font-heading font-bold text-xl ${
            isScrolled || !isHomePage ? 'text-primary' : 'text-white'
          }`}>
            Youngdrive
          </span>
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
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          <span className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'}>
            ☰
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;