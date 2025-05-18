// src/components/layout/Navbar.tsx
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
  isHomePage: boolean;
}

const Navbar = ({ isScrolled, isHomePage }: NavbarProps) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = `relative font-medium hover:text-primary transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
    isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
  }`;
  
  const activeLinkClass = `relative font-medium text-primary after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary`;

  return (
    <nav className="flex items-center">
      <ul className="hidden md:flex space-x-8">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/initiatives" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            Initiatives
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/stories" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            Stories
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            Resources
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/blog" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            Blog
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/get-involved" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            Get Involved
          </NavLink>
        </li>
      </ul>

      {/* Mobile menu that can be implemented with additional conditional rendering and state management */}
    </nav>
  );
};

export default Navbar;