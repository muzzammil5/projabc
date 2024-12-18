import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
      {/*}  <h1 className="text-4xl font-bold mb-6">From Our Menu</h1> */}
        <div className="flex justify-center">
          {/* <img
            src="/images/hero-image.png"
            alt="Dish"
            className=""
          /> */}
        </div>
        <p className="mt-6 text-gray-300">
  {/*}        Explore our delicious menu crafted by professional chefs. */}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
