import React from "react";

const ChefsSection: React.FC = () => {
  const chefs = [
    { name: "Chef Alex", image: "/images/chef1.png" },
    { name: "Chef Maria", image: "/images/chef2.png" },
    { name: "Chef John", image: "/images/chef3.png" },
    { name: "Chef John", image: "/images/chef4.png" },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Meet Our Chef</h2>
        <div className="flex justify-center gap-8">
          {chefs.map((chef, index) => (
            <div key={index} className="text-center">
              <img
                src={chef.image}
                alt={chef.name}
                className="rounded-lg mb-4 width=[312px] height=[391px]  object-cover mx-auto"
              />
              <p className="font-semibold">{chef.name}</p>

              
              
              
            </div>
          ))}
        </div>
      </div>
      <button className=' border-l-yellow-500 border rounded-full  p-2'>See More</button>
    </section>
  );
};

export default ChefsSection;
