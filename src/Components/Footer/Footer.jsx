import React from 'react';
import Button from './Button';  // Import the Button component

export const Footer = () => {
  return (
    <footer className="bg-[#191e3b] text-white py-6 md:py-10 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Section - Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4 text-sm sm:text-base">We’d love to hear from you! Reach out for bookings or inquiries.</p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm sm:text-base">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>123 Hotel Avenue, City Center, Country</span>
              </li>
              <li className="flex items-center text-sm sm:text-base">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center text-sm sm:text-base">
                <i className="fas fa-envelope mr-2"></i>
                <span>info@hotel.com</span>
              </li>
            </ul>
          </div>

          {/* Middle Section - Newsletter Sign Up */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Stay Updated</h2>
            <p className="mb-4 text-sm sm:text-base">Sign up for our newsletter and get the latest offers and updates!</p>
            <form>
              <input
                type="email"
                className="p-3 w-full mb-4 rounded-lg text-black"
                placeholder="Your Email Address"
                required
              />
              <button type="submit" className="w-full py-3 bg-[#8d0003] text-white rounded-lg hover:bg-[#a50003] transition duration-300">
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Section - Social Links */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center items-center">
              <Button />
            </div>  
          </div>
        </div>

        {/* Bottom Section - Footer Links and Made with Love Message */}
        <div className="mt-6 md:mt-10 border-t border-gray-600 pt-4 md:pt-6 text-center">
          <p className="text-xs sm:text-sm">&copy; 2025 Your Hotel Name. All Rights Reserved.</p>
          <p className="text-xs sm:text-sm mt-2">Made with ❤️ by Ishika</p>
        </div>
      </div>
    </footer>
  );
};
