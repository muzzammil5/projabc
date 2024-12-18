import React from "react";

interface FoodItem 
{
  imageSrc: string;
  title: string;
  discount?: string;
  buttonText?: string;
}

const FoodCategory: React.FC = () => {
  const foodItems: FoodItem[] = [
    {
      imageSrc: "/images/plate.png", // Replace with your image paths
      title: "Fast Food Dish",
      discount: "Fast Food Dish",
      buttonText: "Save 30%",
    },
    {
      imageSrc: "/images/burger.png",
      title: "Burger Delight",
      discount: "Burger Delight",
      buttonText: "Save 10%",
    },
    {
      imageSrc: "/images/salad.png",
      title: "Healthy Salad",
      discount: "Healthy Salad",
      buttonText: "Save 20%",
    },
    {
      imageSrc: "/images/dessert.png",
      title: "Tasty Dessert",
      discount: "Tasty Dessert",
      buttonText: "Save 25%",
    },
  ];

  return (


    <section className="bg-black py-12">
      <div className="container mx-auto px-10 text-center">
        {/* Section Title */}
        <h2 className="text-yellow-500 text-lg italic mb-2">Food Category</h2>
        <h1 className="text-white text-4xl font-bold">
          Choose <span className="text-yellow-400">Food Item</span>
        </h1>

        {/* Food Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform"
            >
              {/* Image */}
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              {/* Discount Badge */}
              {item.discount && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white font-semibold px-2 py-1 rounded">
                  {item.buttonText}
                </div>
              )}

              {/* Title */}
              <div className="absolute bottom-0 w-full text-center bg-black/60 py-3">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
