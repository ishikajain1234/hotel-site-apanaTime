import React from "react";
import hotelImage from "../About/about.jpg"; // Add your hotel image here

const About = () => {
  return (
    <div className="about py-16 px-4 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#8d0003]">About Our Hotel</h1>
        <p className="text-lg text-[#555] mt-4">Where luxury meets comfort for an unforgettable experience.</p>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Hotel Image */}
        <div className="w-full md:w-1/2">
          <img
            src={hotelImage}
            alt="Hotel"
            className="w-full h-80 object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Information Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="text-lg text-gray-700">
            <h3 className="text-2xl font-semibold text-[#8d0003]">Our Story</h3>
            <p className="mt-4">
              Established in 2005, our hotel has become a symbol of luxury and comfort. We are committed to providing an exceptional stay with top-notch service and world-class amenities. Our hotel offers a blend of modern design and traditional charm, ensuring an unforgettable experience for every guest.
            </p>
          </div>

          <div className="text-lg text-gray-700">
            <h3 className="text-2xl font-semibold text-[#8d0003]">Our Vision</h3>
            <p className="mt-4">
              To be the leading hotel in hospitality, offering unique experiences that exceed guest expectations. We aim to create a warm and welcoming environment, where every guest feels like royalty.
            </p>
          </div>

          <div className="text-lg text-gray-700">
            <h3 className="text-2xl font-semibold text-[#8d0003]">Our Mission</h3>
            <p className="mt-4">
              Our mission is to provide luxurious accommodations, exceptional service, and personalized experiences that leave lasting memories. We focus on comfort, convenience, and the well-being of our guests.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12">
        <button className="bg-[#8d0003] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#b3000f] transition-colors duration-300">
          Book Your Stay Now
        </button>
      </div>
    </div>
  );
};

export default About;
