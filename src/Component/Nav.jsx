import React, { useState } from "react";
import CircularText from "../../Reactbits/CircularText/CircularText";
import { Link, useLocation } from "react-router";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the path matches the current location
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed w-full top-0 z-50 flex justify-center py-4 md:py-6 px-4">
      {/* Glass morphism navbar */}
      <nav className="bg-white/10 backdrop-blur-lg rounded-full px-4 md:px-6 py-3 flex items-center justify-between w-full max-w-4xl border border-white/20 shadow-[0_0_15px_rgba(255, 255, 255, 0.055)] transition-all duration-300">
        {/* Logo/Home */}
        <Link to="/" className="flex items-center">
          <div className="relative h-8 w-8 md:h-10 md:w-10">
            <CircularText
              text="MEHEDI*HASAN*SHIFAT*"
              onHover="speedUp"
              spinDuration={20}
              className="w-full h-full"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 mx-auto">
          <Link
            to="/"
            className={`text-white transition-all font-medium relative group ${
              isActive('/') ? 'text-opacity-100' : 'text-opacity-80 hover:text-opacity-100'
            }`}
          >
            <span className="relative z-10 px-3 py-1">Home</span>
            <span className={`absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full transition-transform duration-300 ${
              isActive('/') ? 'scale-100' : 'scale-0 group-hover:scale-100'
            }`}></span>
          </Link>

          <Link
            to="/about"
            className={`text-white transition-all font-medium relative group ${
              isActive('/about') ? 'text-opacity-100' : 'text-opacity-80 hover:text-opacity-100'
            }`}
          >
            <span className="relative z-10 px-3 py-1">About</span>
            <span className={`absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full transition-transform duration-300 ${
              isActive('/about') ? 'scale-100' : 'scale-0 group-hover:scale-100'
            }`}></span>
          </Link>

          <Link
            to="/work"
            className={`text-white transition-all font-medium relative group ${
              isActive('/work') ? 'text-opacity-100' : 'text-opacity-80 hover:text-opacity-100'
            }`}
          >
            <span className="relative z-10 px-3 py-1">Work</span>
            <span className={`absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full transition-transform duration-300 ${
              isActive('/work') ? 'scale-100' : 'scale-0 group-hover:scale-100'
            }`}></span>
          </Link>

          <Link
            to="/blog"
            className={`text-white transition-all font-medium relative group ${
              isActive('/blog') ? 'text-opacity-100' : 'text-opacity-80 hover:text-opacity-100'
            }`}
          >
            <span className="relative z-10 px-3 py-1">Blog</span>
            <span className={`absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full transition-transform duration-300 ${
              isActive('/blog') ? 'scale-100' : 'scale-0 group-hover:scale-100'
            }`}></span>
          </Link>

          <Link
            to="/projects"
            className={`text-white transition-all font-medium relative group ${
              isActive('/projects') ? 'text-opacity-100' : 'text-opacity-80 hover:text-opacity-100'
            }`}
          >
            <span className="relative z-10 px-3 py-1">Projects</span>
            <span className={`absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full transition-transform duration-300 ${
              isActive('/projects') ? 'scale-100' : 'scale-0 group-hover:scale-100'
            }`}></span>
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className={`hidden md:block backdrop-blur-sm text-white px-4 md:px-6 py-2 rounded-full transition-all duration-300 border border-white/30 ${
            isActive('/contact')
              ? 'bg-white/30'
              : 'bg-white/20 hover:bg-white/30'
          }`}
        >
          Book a Call
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center md:hidden">
          <div className="flex flex-col items-center space-y-6">
            {/* Mobile nav items with active states */}
            <Link to="/" className={`text-white text-xl ${isActive('/') ? 'opacity-100 font-medium' : 'opacity-80'}`}>
              Home
            </Link>
            <Link to="/about" className={`text-white text-xl ${isActive('/about') ? 'opacity-100 font-medium' : 'opacity-80'}`}>
              About
            </Link>
            <Link to="/work" className={`text-white text-xl ${isActive('/work') ? 'opacity-100 font-medium' : 'opacity-80'}`}>
              Work
            </Link>
            <Link to="/blog" className={`text-white text-xl ${isActive('/blog') ? 'opacity-100 font-medium' : 'opacity-80'}`}>
              Blog
            </Link>
            <Link to="/projects" className={`text-white text-xl ${isActive('/projects') ? 'opacity-100 font-medium' : 'opacity-80'}`}>
              Projects
            </Link>
            <Link to="/more" className={`text-white text-xl ${isActive('/more') ? 'opacity-100 font-medium' : 'opacity-80'}`}>
              More
            </Link>
            <Link
              to="/contact"
              className={`px-6 py-2 rounded-full mt-4 text-white ${
                isActive('/contact')
                  ? 'bg-white/30 border border-white/40'
                  : 'bg-white/20 border border-white/30'
              }`}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;