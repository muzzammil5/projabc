"use client";
import React, { useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

const tabs = ["Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];

const menuItems: MenuItem[] = [
  { id: 1, name: "Lettuce Leaf", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish1.png" },
  { id: 2, name: "Fresh Breakfast", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.55$", image: "/menu/dish2.png" },
  { id: 3, name: "Mild Butter", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish3.png" },
  { id: 4, name: "Fresh Bread", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish4.png" },
  { id: 5, name: "Glow Cheese", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish5.png" },
  { id: 6, name: "Italian Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.55$", image: "/menu/dish6.png" },
  { id: 7, name: "Slice Beef", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish7.png" },
  { id: 8, name: "Mushroom Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish8.png" },];

const OurMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Lunch");

  return (
    <section className="bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-orange-500 text-lg italic">Choose & pick</h3>
          <h2 className="text-4xl font-bold text-white">
            <span className="text-orange-500">From</span> Our Menu
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8 text-gray-400">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 font-medium ${activeTab === tab
                ? "text-white border-b-2 border-orange-500"
                : "hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Plate Image */}
          <div className="hidden lg:block">
            <img
              src="/menu/main-plate.png"
              alt="Plate with Salad"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Menu Grid */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <div className="text-orange-500 font-bold">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;




/* "use client";
import React, { useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

const tabs = ["Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];

const menuItems: MenuItem[] = [
  { id: 1, name: "Lettuce Leaf", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish1.png" },
  { id: 2, name: "Fresh Breakfast", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.55$", image: "/menu/dish2.png" },
  { id: 3, name: "Mild Butter", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish3.png" },
  { id: 4, name: "Fresh Bread", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish4.png" },
  { id: 5, name: "Glow Cheese", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish5.png" },
  { id: 6, name: "Italian Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.55$", image: "/menu/dish6.png" },
  { id: 7, name: "Slice Beef", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish7.png" },
  { id: 8, name: "Mushroom Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.55$", image: "/menu/dish8.png" },
];

const OurMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Lunch");

  return (
    <section className="bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-orange-500 text-lg italic">Choose & pick</h3>
          <h2 className="text-4xl font-bold text-white">
            <span className="text-orange-500">From</span> Our Menu
          </h2>
        </div>

        {/* Tabs }*/
{/* <div className="flex justify-center space-x-4 mb-8 text-gray-400">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`py-2 px-4 font-medium ${activeTab === tab
        ? "text-white border-b-2 border-orange-500"
        : "hover:text-white"
        }`}
    >
      {tab}
    </button>
  ))}
</div> */}

{/* Menu Grid */ }
{/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {menuItems.map((item) => (
    <div key={item.id} className="flex items-center space-x-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div>
        <h3 className="text-lg font-bold text-white">{item.name}</h3>
        <p className="text-gray-400 text-sm">{item.description}</p>
        <div className="text-orange-500 font-bold">{item.price}</div>
      </div>
    </div>
  ))}
</div>
      </div >
    </section >
  );
}; */}

// export default OurMenu;
//  */