import React from "react";
import hotelBackground from "./contact.jpg"; // Add your hotel background image here

const Contact = () => {
  return (
    <div
      className="contact-section relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${hotelBackground})`,
        height: "100vh",
        backdropFilter: "blur(5px)", // Blurs the background
      }}
    >
      {/* Overlay to darken the background and make text readable */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contact Form and Info Section */}
      <div className="relative container mx-auto px-6 py-16 text-white z-10 h-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full">
          {/* Left Side: Contact Info Card */}
          <div className="contact-info bg-white text-gray-800 p-6 rounded-xl shadow-lg flex-1 z-20">
            <h2 className="text-2xl font-semibold text-[#8d0003] mb-4">Contact Us</h2>
            <p className="mb-4 text-gray-600 text-sm md:text-base">We’d love to hear from you. Reach out to us for bookings or any inquiries!</p>

            {/* Address Information */}
            <ul>
              <li className="flex items-center mb-4 text-sm md:text-base">
                <i className="fas fa-map-marker-alt text-[#8d0003] mr-2"></i>
                <span>123 Hotel Avenue, City Center, Country</span>
              </li>
              <li className="flex items-center mb-4 text-sm md:text-base">
                <i className="fas fa-phone-alt text-[#8d0003] mr-2"></i>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center mb-4 text-sm md:text-base">
                <i className="fas fa-envelope text-[#8d0003] mr-2"></i>
                <span>info@hotel.com</span>
              </li>
            </ul>

            {/* Additional Contact Info */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#8d0003] text-sm md:text-base">Business Hours</h3>
              <ul className="text-gray-600 text-xs md:text-sm">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="social-links mt-6">
              <h3 className="text-xl font-semibold text-[#8d0003] mb-4 text-sm md:text-base">Follow Us</h3>
              <ul className="flex gap-4">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#8d0003]">
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#8d0003]">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#8d0003]">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Google Map Embed */}
          <div className="map-container bg-white p-6 rounded-xl shadow-lg flex-1 z-20">
            <h2 className="text-2xl font-semibold text-[#8d0003] mb-4">Find Us on the Map</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799070602!2d-74.2598751!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b72c1d22cb3%3A0x7bb5b5f6a6f3c2c!2sNew%20York%20City%2C%20NY%20USA!5e0!3m2!1sen!2sin!4v1605121672749!5m2!1sen!2sin"
              width="100%"
              height="300" // Adjusted height for smaller screens
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;