import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">

          <img
            src="/images/tacos.png"
            alt="Tacos"
            className="rounded-lg object-cover h-44 w-full"
          />
          <img
            src="/images/burger.png"
            alt="Burger"
            className="rounded-lg object-cover h-44 w-full"
          />
          <img
            src="/images/mayo.png"
            alt="Mayo"
            className="rounded-lg object-cover h-44 w-full"
          />
          <img
            src="/images/burger with fork.png"
            alt="Burger with Fork"
            className="rounded-lg object-cover h-44 w-full"
          />
          
          <img
            src="/images/burger with sauce.png"
            alt="Burger with Sauce"
            className="rounded-lg object-cover [h-168px] [w-161px]"
          />
          <img
            src="/images/plate with fork.png"
            alt="Plate with Fork"
            className="rounded-lg object-cover h-[166px] w-[161px]"
          />
        </div>

        {/* Text and Features Section */}
        <div>
          {/* Section Title */}
          <h2 className="text-yellow-400 italic text-lg mb-2">Why Choose us</h2>
          <h1 className="text-white text-4xl font-bold mb-4">
            <span className="text-yellow-400">Extra</span> ordinary taste
            <br />
            And Experienced
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                🍔
              </div>
              <p className="text-white font-semibold">Fast Food</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                🍽️
              </div>
              <p className="text-white font-semibold">Lunch</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              🍷
              </div>
              <p className="text-white font-semibold">Dinner</p>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="bg-orange-500 text-white rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold">30+</h3>
            </div>
            <div className="text-right">
              <p>Years of</p>
              <h4 className="font-bold">Experienced</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
