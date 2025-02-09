import React from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import Button from "./Button";


const Rooms = () => {
  return (
    <div className="rooms text-center py-12 px-4">
      <div id="rsum1" className="text-lg text-[#8d0003] my-4 font-semibold">
        How would you like to stay with us?
      </div>
      <div id="rintro" className="text-5xl my-4 font-bold text-[#8d0003]">
        Our Rooms
      </div>
      <div id="rsum2" className="text-sm text-[#8d0003] pb-3 italic">
        Luxury is not a place, it's an experience.
      </div>

      {/* Room 1 */}
      <div className="roomspic flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl my-8" id="r1">
        <img src={img1} alt="Room 1" className="w-full md:w-1/2 p-8 object-cover rounded-md shadow-lg transition-transform duration-500 hover:scale-80" />
        <div className="rdesc flex flex-col pt-8 md:pt-24 pl-8 pr-6 text-lg">
          Enjoy our elegant 40 m² guest rooms, designed in warm beige tones and tailored to the needs of private and business travelers alike. <br /> All rooms have a large marble bathroom, a double bed, air conditioning, an additional work area with free internet access and a walk-in closet. Our superior rooms impress with a wonderful view of the city and the adjacent park. <br /><br /> Additional services: 24 hour room service Bathrobe, slippers Daily newspaper on request
          <br />
          <br /> Welcome gifts: Fruit basket 1 bottle of mineral water Coffee and tea
          <div className="btn mt-4">
            <Button text="Book Now" />
          </div>
        </div>
      </div>

      {/* Room 2 */}
      <div className="roomspic flex flex-col md:flex-row-reverse bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl my-8" id="r2">
        <img src={img2} alt="Room 2" className="w-full md:w-1/2 p-8 object-cover rounded-md shadow-lg transition-transform duration-500 hover:scale-80" />
        <div className="rdesc flex flex-col pt-8 md:pt-24 pl-8 pr-6 text-lg">
          This is a one-room suite with queen-size bed and comfortable seating area. It is located downstairs with an outside entrance and is wheelchair assessable. It has a 39-inch flat screen TV and electric fireplace. <br /><br /> The butler kitchen (refrigerator, microwave, Keurig coffee brewer are provided). Coffee, tea and amenities are supplied. The large bathroom has a 60-inch shower (no tub). Luxury hotels in the 1900s provided sample rooms for traveling salesmen to display their wares. <br /><br /> Remember transportation was either by train or horse & buggy.
          <div className="btn mt-4">
            <Button text="Book Now" />
          </div>
        </div>
      </div>

      {/* Room 3 */}
      <div className="roomspic flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl my-8" id="r3">
        <img src={img3} alt="Room 3" className="w-full md:w-1/2 p-8 object-cover rounded-md shadow-lg transition-transform duration-500 hover:scale-80" />
        <div className="rdesc flex flex-col pt-8 md:pt-24 pl-8 pr-6 text-lg">
          Our Deluxe Twin/Large Double also provides views over landscaped gardens. It has a seating area, digital safe and mini fridge. This room can be configured with either 2 single beds or zip and linked to provide a large double bed. <br /><br /> As our smallest budget rooms, these Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage. <br /> <br /> It has ample storage, a seating area, digital safe and mini fridge.
          <div className="btn mt-4">
            <Button text="Book Now" />
          </div>
        </div>
      </div>

      {/* Room 4 */}
      <div className="roomspic flex flex-col md:flex-row-reverse bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl my-8" id="r4">
        <img src={img4} alt="Room 4" className="w-full md:w-1/2 p-8 object-cover rounded-md shadow-lg transition-transform duration-500 hover:scale-80" />
        <div className="rdesc flex flex-col pt-8 md:pt-24 pl-8 pr-6 text-lg">
          The Standard Room comprises of 1 Double Bed or 2 Twin Beds, 2 Bedside Tables, a Desk & Chair. The room is furnished with wall to wall carpeting, trendy furnishings and a balcony. <br /><br /> Our ultramodern glass bathroom is equipped with hairdryer, magnifying shaving and make up mirror as well as all the amenities you could possibly need during your stay. <br /><br /> A Complimentary Bottle of Wine, Fresh Fruit and Mineral Water, are provided on arrival. Electric current: 220 Volts. Smoking rooms & inter-connecting rooms are also available.
          <div className="btn mt-4">
            <Button text="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
