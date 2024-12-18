"use client";
import React, { useState } from "react";

const MenuSection: React.FC = () => {
  const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];

  const menuItems = [
    { category: "Breakfast", name: "Lettuce Leaf", price: "12.5$", image: "/images/dish1.png" },
    { category: "Breakfast", name: "Fresh Breakfast", price: "14.5$", image: "/images/dish2.png" },
    { category: "Breakfast", name: "Mild Butter", price: "12.5$", image: "/images/dish3.png" },
    { category: "Breakfast", name: "Fresh Bread", price: "12.5$", image: "/images/dish4.png" },
    { category: "Breakfast", name: "Glow Cheese", price: "12.5$", image: "/images/dish5.png" },
    { category: "Breakfast", name: "Italian Pizza", price: "14.5$", image: "/images/dish6.png" },
    { category: "Breakfast", name: "Slice Beef", price: "12.5$", image: "/images/dish7.png" },
    { category: "Breakfast", name: "Mushroom Pizza", price: "12.5$", image: "/images/dish8.png" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("Breakfast");

  const filteredMenuItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-orange-500">From</span> Our Menu
        </h2>
        <p className="text-center text-orange-300 mb-8 italic">
          Choose & pick
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-6 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`text-lg font-semibold ${
                selectedCategory === category
                  ? "text-orange-500 underline"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Left side image */}
          <div className="flex justify-left items-center">
            <img
              src="/images/main-plate.png"
              alt="Menu Dish"
              className="rounded-lg w-72 h-72 object-cover"
            />
          </div>

          {/* Right side menu list */}
          <div className="grid grid-col-2 space-y-3"> 
            {filteredMenuItems.map((item, index) => (
              <div
                key={index}
                className="p-2  min-h-5 max-w-60">
                <div className="border" >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded-lg"
                  />
                  <div>
                    <h1 className="font-semibold text-sm">{item.name}</h1>
                    <p className="text-yellow-400 font-bold text-sm">{item.price }</p>
                    <p className="text-xs text-gray-400"> 
                      Lacus nisl, et ac dapibus velit in consequat. 
                    </p>
                  </div>

                  
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;





{/*

import React from "react";

const MenuSection: React.FC = () => {
  const menuItems = [
    { id: 1, name: "1-Lettuce Leaf", price: "12.5$", image: "/images/dish1.png", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 2, name: "2-Fresh Breakfast", price: "14.5$", image: "/images/dish2.png", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 3, name: "3-Mild Butter", price: "12.5$", image: "/images/dish3.png", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 4, name: "4-Fresh Bread", price: "12.5$", image: "/images/dish4.png", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 5, name: "5-Glow Cheese", price: "12.5$", image: "/images/dish5.png", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 6, name: "6-Italian Pizza", price: "14.5$", image: "/images/dish6.png", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 7, name: "7-Sllice Beef", price: "12.5$", image: "/images/dish7.png", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 8, name: "8-Mushaom Pizza", price: "12.5$", image: "/images/dish8.png", desc: "Lacus nisi, et ac dapibus velit in consequat." },

  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="
      container mx-auto 
      my-auto

      
      
      " >
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">


        <div className="grid grid-cols-2 grid-flow-col gap-2"> 
          {menuItems.map((item) => (
            <div key={item.id} className="bg-gray-900 rounded-lg p-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg mb-4 h-20 w-20 object-cover"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-whie-500 font-bold">{item.desc}</p>
              <p className="text-yellow-500 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
*/}