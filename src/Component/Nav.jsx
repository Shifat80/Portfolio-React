import React, { useState, useEffect } from "react";
import CircularText from "../../Reactbits/CircularText/CircularText";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
// Import React Icons
import { FaHome, FaUser, FaBriefcase, FaBook, FaCubes, FaPhoneAlt, FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  // Active section state for scroll spy - only one active at a time
  const [activeSection, setActiveSection] = useState(location.pathname);

  // Navigation items with icons from React Icons
  const navItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "About", path: "/about", icon: FaUser },
    { name: "Work", path: "/work", icon: FaBriefcase },
    { name: "Blog", path: "/blog", icon: FaBook },
    { name: "Projects", path: "/projects", icon: FaCubes },
  ];

  // Enhanced handleNavClick for all navigation items
  const handleNavClick = (e, path) => {
    e.preventDefault();

    // Reset previous active section first
    setActiveSection(path);

    // Handle home path separately
    if (path === "/") {
      // Scroll to top of page for home
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      // Update URL if not already at home
      if (location.pathname !== "/") {
        window.history.pushState({}, "", "/");
      }
    } else {
      // Extract the section id from the path (remove the leading slash)
      const sectionId = path.substring(1);

      // Find the section element
      const section = document.getElementById(sectionId);

      if (section) {
        // Smooth scroll to the section
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        // Update URL without page reload
        window.history.pushState({}, "", path);
      } else {
        // If section doesn't exist on current page, navigate to it
        window.location.href = path;
      }
    }

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Set up scroll spy to highlight active section in navigation
  useEffect(() => {
    const handleScroll = () => {
      // Get all sections that have IDs matching our navigation
      const sections = navItems
        .filter(item => item.path !== "/") // Exclude home
        .map(item => {
          const id = item.path.substring(1);
          const element = document.getElementById(id);
          if (element) {
            return {
              id: id,
              path: item.path,
              element: element,
              top: element.offsetTop - 100, // Offset for navbar
              bottom: element.offsetTop + element.offsetHeight - 100
            };
          }
          return null;
        })
        .filter(Boolean);

      // Add home section (top of page)
      sections.unshift({
        id: "home",
        path: "/",
        top: 0,
        bottom: window.innerHeight / 2
      });

      // Get current scroll position
      const scrollPosition = window.scrollY;

      // Find the current section (only one section can be active)
      const currentSection = sections.find(
        section => scrollPosition >= section.top && scrollPosition < section.bottom
      );

      if (currentSection && currentSection.path !== activeSection) {
        // Update URL without triggering navigation
        window.history.replaceState({}, "", currentSection.path);

        // Force component update to reflect active state - only one active section
        setActiveSection(currentSection.path);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, location.pathname, activeSection]);

  // Check if a path is currently active
  const isSectionActive = (path) => {
    return activeSection === path;
  };

  return (
    <header className="fixed w-full top-0 z-50 flex justify-center py-5">
      {/* Circular Text Logo - Positioned outside navbar */}
      <motion.div
        className="fixed top-6 md:top-8 left-4 md:left-8 z-50 h-10 w-10 md:h-14 md:w-14 hidden md:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <Link to="/" className="block" onClick={(e) => handleNavClick(e, "/")}>
          <CircularText
            text="MEHEDI HASAN"
            onHover="speedUp"
            spinDuration={20}
            className="w-full h-full pt-2.5"
          />
        </Link>
      </motion.div>

      <motion.nav
        className="bg-white/10 backdrop-blur-lg rounded-full px-4 py-3 flex items-center justify-center md:max-w-xl w-[90%] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.08)] transition-all"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-white transition-all font-medium relative group px-3 py-1.5`}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={(e) => handleNavClick(e, item.path)}
            >
              <span className="relative z-10 text-sm">{item.name}</span>

              {isSectionActive(item.path) ? (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/20 rounded-full -z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <motion.div
                    className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 24 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div className="absolute w-10 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                    <motion.div className="absolute w-6 h-6 bg-white/30 rounded-full blur-md -top-1" />
                  </motion.div>
                </motion.span>
              ) : (
                <motion.span
                  className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 -z-0"
                  animate={{
                    scale: hoveredItem === item.name ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="https://calendar.app.google/adxz9AnAoNZ2BxB5A"
          className={`hidden md:flex items-center space-x-1 backdrop-blur-sm text-white px-4 py-1.5 rounded-full transition-all duration-300 border border-white/30 text-sm ml-4
            ${isSectionActive("/contact") ? "bg-white/30" : "bg-white/10 hover:bg-white/20"}`}
          onMouseEnter={() => setHoveredItem("contact")}
          onMouseLeave={() => setHoveredItem(null)}
          // onClick={(e) => handleNavClick(e, "https://calendar.app.google/adxz9AnAoNZ2BxB5A")}
        >
          <motion.span
            animate={{
              scale: hoveredItem === "contact" ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <FaPhoneAlt size={16} />
          </motion.span>
          <span>Book a Call</span>
        </Link>

        {/* Mobile Menu Button and Logo */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link to="/" className="flex items-center" onClick={(e) => handleNavClick(e, "/")}>
            <motion.div className="h-10 w-10">
              <CircularText
                text="S*H*I*F*T*"
                onHover="speedUp"
                spinDuration={20}
                className="w-full h-full"
              />
            </motion.div>
          </Link>

          <motion.button
            className="text-white p-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Width */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-40 flex flex-col pt-16 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Back Button for Mobile */}
            <motion.button
              className="absolute top-6 left-4 text-white flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <FaArrowLeft size={20} />
              <span>Back</span>
            </motion.button>

            <motion.div
              className="flex flex-col items-center justify-center h-full w-full px-6 space-y-5"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="w-full"
                >
                  <Link
                    to={item.path}
                    className={`text-white text-xl flex items-center justify-center gap-3 px-6 py-3 rounded-full w-full
                      ${isSectionActive(item.path)
                        ? "bg-white/10 font-medium"
                        : "opacity-80 hover:opacity-100 hover:bg-white/5"}`}
                    onClick={(e) => handleNavClick(e, item.path)}
                  >
                    <item.icon size={20} />
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full"
              >
                <Link
                  to="https://calendar.app.google/adxz9AnAoNZ2BxB5A"
                  className={`py-3 rounded-full mt-4 text-white flex items-center justify-center gap-2 w-full
                    ${isSectionActive("/contact")
                      ? "bg-white/30 border border-white/40"
                      : "bg-white/10 border border-white/20 hover:bg-white/20"}`}
                  // onClick={(e) => handleNavClick(e, "https://calendar.app.google/adxz9AnAoNZ2BxB5A")}
                >
                  <FaPhoneAlt size={18} />
                  Book a Call
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;