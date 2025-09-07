import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Team Avaite", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-16 py-3">
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg flex items-center justify-between p-3 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="ElectroInfinity Logo"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <span className="text-white text-lg font-semibold hidden sm:block">
            Electro Infinity Club
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition duration-200 pb-1 ${
                pathname === link.path
                  ? "text-cyan-300 border-b-2 border-cyan-300"
                  : "text-gray-200 hover:text-cyan-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0f1f3d] bg-opacity-95 shadow-lg flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium transition duration-200 ${
                pathname === link.path
                  ? "text-cyan-300"
                  : "text-gray-200 hover:text-cyan-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
