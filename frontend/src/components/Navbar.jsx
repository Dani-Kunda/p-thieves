import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/* ============================================
   NAVBAR COMPONENT - Persona 5 Royal Theme
   ============================================
   
   USER CONTENT: Edit navigation links below
   - Add or remove nav items in the 'navLinks' array
   - Change link text and paths as needed
   ============================================ */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // USER CONTENT: Edit navigation links here
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CHARACTERS', path: '/characters' },
    { name: 'PRODUCTS', path: '/products' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-[#E0000F]"
      data-testid="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3"
            data-testid="navbar-logo"
          >
            {/* USER CONTENT: Replace logo text or add logo image */}
            <span className="font-heading text-2xl sm:text-3xl tracking-widest text-white">
              PHANTOM<span className="text-[#E0000F]">THIEVES</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-lg tracking-wider link-underline transition-colors duration-150
                  ${isActive(link.path) ? 'text-[#E0000F]' : 'text-white hover:text-[#E0000F]'}`}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-[#E0000F] transition-colors"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden border-t border-[#333333] py-4"
            data-testid="mobile-menu"
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 font-heading text-xl tracking-wider transition-colors
                  ${isActive(link.path) 
                    ? 'text-[#E0000F] bg-[#1a1a1a]' 
                    : 'text-white hover:text-[#E0000F] hover:bg-[#0a0a0a]'}`}
                style={{ animationDelay: `${index * 50}ms` }}
                data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
