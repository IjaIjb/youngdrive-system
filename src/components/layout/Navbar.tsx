// src/components/layout/Navbar.tsx
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
  isHomePage: boolean;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const Navbar = ({ isScrolled, isHomePage, isMobile = false, onLinkClick }: NavbarProps) => {
  const linkClass = `relative font-medium hover:text-primary transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
    isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
  }`;
  
  const activeLinkClass = `relative font-medium text-primary after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary`;

  const mobileLinkClass = "block py-3 px-4 text-gray-800 hover:text-primary hover:bg-gray-50 transition-colors duration-300 border-b border-gray-100 last:border-b-0";
  const mobileActiveLinkClass = "block py-3 px-4 text-primary bg-gray-50 border-b border-gray-100 last:border-b-0 font-medium";

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/initiatives", label: "Initiatives" },
    { to: "/projects", label: "Projects" },
    { to: "/stories", label: "Stories" },
    { to: "/resources", label: "Resources" },
    { to: "/get-involved", label: "Get Involved" }
  ];

  if (isMobile) {
    return (
      <nav className="flex-1">
        <ul className="py-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink 
                to={item.to} 
                className={({ isActive }) => 
                  isActive ? mobileActiveLinkClass : mobileLinkClass
                }
                onClick={onLinkClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="flex items-center">
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink 
              to={item.to} 
              className={({ isActive }) => 
                isActive ? activeLinkClass : linkClass
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;