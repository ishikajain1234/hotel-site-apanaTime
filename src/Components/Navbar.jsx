import React, { useState } from "react";
import { Home, Bed, Phone, Menu, X, ConciergeBell, Utensils, Info } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#191e3b] text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <ConciergeBell className="text-[#e61e43] w-8 h-8" />
          <span className="text-2xl font-bold tracking-wide">LuxuryStay</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <NavItem to="hero" icon={Home} text="Home" />
          <NavItem to="rooms" icon={Bed} text="Rooms" />
          <NavItem to="kitchen" icon={Utensils} text="Kitchen" />
          <NavItem to="about" icon={Info} text="About" />
          <NavItem to="contact" icon={Phone} text="Contact" />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#191e3b] p-4 space-y-4 border-t border-gray-700 flex flex-col items-center">
          <MobileNavItem to="hero" icon={Home} text="Home" />
          <MobileNavItem to="rooms" icon={Bed} text="Rooms" />
          <MobileNavItem to="kitchen" icon={Utensils} text="Kitchen" />
          <MobileNavItem to="about" icon={Info} text="About" />
          <MobileNavItem to="contact" icon={Phone} text="Contact" />
        </div>
      )}
    </nav>
  );
};

// Reusable Nav Item Component for Desktop and Mobile
const NavItem = ({ to, icon: Icon, text }) => (
  <li className="group relative cursor-pointer">
    <a href={`#${to}`} className="flex items-center space-x-2 hover:text-[#e61e43] transition duration-300 text-lg">
      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="text-lg">{text}</span>
    </a>
    <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#e61e43] transition-all duration-300 group-hover:w-full"></span>
  </li>
);

// Mobile Nav Item Component
const MobileNavItem = ({ to, icon: Icon, text }) => (
  <div className="flex items-center space-x-2 hover:text-[#e61e43] transition text-lg">
    <Icon className="w-7 h-7" />
    <span className="text-lg">{text}</span>
  </div>
);

export default Navbar;
