import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center items-center">
        {/* Single Card - Professional Chefs */}
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-6xl mb-2">
            🍳 {/* Replace with an actual icon */}
          </div>
          <h3 className="text-white font-semibold mb-1">Professional Chefs</h3>
          <p className="text-white text-2xl font-bold">420</p>
        </div>

        {/* Single Card - Items of Food */}
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-6xl mb-2">
            🍔 {/* Replace with an actual icon */}
          </div>
          <h3 className="text-white font-semibold mb-1">Items Of Food</h3>
          <p className="text-white text-2xl font-bold">320</p>
        </div>

        {/* Single Card - Years of Experience */}
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-6xl mb-2">
            🍴 {/* Replace with an actual icon */}
          </div>
          <h3 className="text-white font-semibold mb-1">Years Of Experienced</h3>
          <p className="text-white text-2xl font-bold">30+</p>
        </div>

        {/* Single Card - Happy Customers */}
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-6xl mb-2">
            🍕 {/* Replace with an actual icon */}
          </div>
          <h3 className="text-white font-semibold mb-1">Happy Customers</h3>
          <p className="text-white text-2xl font-bold">220</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
