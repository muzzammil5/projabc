"use client";

import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";


const OurChefPage: React.FC = () => {
  const chefs = [
    { name: "Tanisha Patel", role: "Chef", image: "/images/chef-1.png" },
    { name: "Jessica Begum", role: "Chef", image: "/images/chef-2.png" },
    { name: "M. Mohammed", role: "Chef", image: "/images/chef-3.png" },
    { name: "Binura Kathy", role: "Chef", image: "/images/chef-4.png" },
    { name: "Takisha Runi", role: "Chef", image: "/images/chef-5.png" },
    { name: "Brian Dungon", role: "Chef", image: "/images/chef-6.png" },
    { name: "Robin Medicael", role: "Chef", image: "/images/chef-7.png" },
    { name: "William Rust", role: "Chef", image: "/images/chef-8.png" },
    { name: "Kevin William", role: "Chef", image: "/images/chef-9.png" },
    { name: "Maherwad Mohil", role: "Chef", image: "/images/chef-10.png" },
    { name: "Alzar Ruben", role: "Chef", image: "/images/chef-11.png" },
    { name: "Mousaka Kofy", role: "Chef", image: "/images/chef-12.png" },
  ];

  return (

    <main>
      <Header />


      <div>

        {/* Banner Section */}

        <div
          className="h-56 bg-cover bg-center flex flex-col items-center justify-center text-white text-3xl font-bold"
          style={{ backgroundImage: "url('/images/banner-chef.png')" }}>
          <p className="justify-center">Our Chef </p>
          <p className="text-xs">Home &gt; <span className="text-orange-500"> 
            Chef</span> </p>
        </div>

        {/* Chef Grid Section */}
        <section className="container mx-auto py-12">
          <h2 className="text-center text-4xl font-semibold mb-10">
            Meet Our <span className="text-orange-500">Chef</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {chefs.map((chef, index) => (
              <div key={index} className="text-center">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-40 h-60 object-cover  mx-auto mb-4"
                />
                {/*<h3 className="text-xl font-medium">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>*/}
              </div>
            ))}
          </div>
        </section>
        <Footer />

        {/*       {/* Footer Section */}
        <footer className="bg-black text-gray-400 py-12">
          <div className="container mx-auto">
            {/* Include the footer code from earlier */}
          </div>
        </footer>
      </div>
    </main>
  );
};

export default OurChefPage;
