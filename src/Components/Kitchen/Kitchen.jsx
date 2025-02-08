import React from "react";

// Import images
import img1 from "../Kitchen/food-3.jpg";
import img2 from "../Kitchen/food-4.jpg";
import img3 from "../Kitchen/food-5.jpg";
import img4 from "../Kitchen/food-6.jpg";
import img5 from "../Kitchen/food-7.jpg";
import img6 from "../Kitchen/food-8.jpg";

const Kitchen = () => {
  const kitchenItems = [
    { id: 1, img: img1, title: "Italian Coffee", description: "Start your day with a fresh cup of coffee from our advanced coffee maker" },
    { id: 2, img: img2, title: "Fish Curry With Japanease Rice", description: "Keep your food fresh with the latest refrigerator technology." },
    { id: 3, img: img3, title: "Chees e Salad With tea", description: "A large sink for all your kitchen tasks." },
    { id: 4, img: img4, title: "Bun with coconut Pudding", description: "Cook like a pro with a high-end gas stove." },
    { id: 5, img: img5, title: "Boiling Egg & fries", description: "Effortlessly clean dishes with our premium dishwasher." },
    { id: 6, img: img6, title: "Rice and Ried Egglant", description: "Start your day with a fresh cup of coffee from our advanced coffee maker." },
  ];

  return (
    <div className="kitchen py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#8d0003]">Our Kitchen </h1>
        <p className="text-lg text-[#8d0003] mt-4">Experience the best kitchen designed for your convenience and luxury.</p>
      </div>

      {/* Kitchen Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {kitchenItems.map((item) => (
          <div
            key={item.id}
            className="kitchen-card bg-white rounded-lg shadow-lg transform transition duration-500 ease-in-out "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 hover:scale-90"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-[#8d0003]">{item.title}</h3>
              <p className="text-md text-[#555] mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kitchen;
