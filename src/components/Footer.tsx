/* import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <div className="container mx-auto">
        <p>&copy; 2024 FoodTuck. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
 */


"use client";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">
            <span className="text-orange-500">Still</span> You Need Our Support?
          </h2>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-64 px-4 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-orange-600">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm mb-4">
              Quisque dictum elit ac tellus tristique, tincidunt tristique ex
              bibendum orci tincidunt eleifend diam mattis.
            </p>
            <div>
              <span className="block mb-2 text-orange-500 font-semibold">
                Opening Hours
              </span>
              <p className="text-sm">Mon-Fri: 8AM - 6PM</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2 flex flex-col">
              {["About", "Home", "Team", "Menu", "Contact"].map((link, index) => (
                <Link href={link === "Home" ? "/" : "#"} key={index} className="hover:text-orange-500 cursor-pointer" >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help?</h3>
            <ul className="space-y-2 flex flex-col" >
              {["FAQ", "Terms & Conditions", "Support", "Privacy"].map(
                (link, index) => (
                  <Link href={link === "FAQ" ? "/faq" : "#"} key={index} className="hover:text-orange-500 cursor-pointer" >
                    {link}
                  </Link>
                )
              )}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((post) => (
                <div key={post} className="flex items-center space-x-4">
                  <img
                    src={`/images/post-${post}.png`}
                    alt="Recent Post"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <p className="text-sm hover:text-orange-500 cursor-pointer">
                    Is fastfood good for your body?
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} by Foodies. All Rights
            Reserved.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4" >
            {["facebook", "twitter", "instagram", "pinterest", "youtube"].map((icon) => (
              <a key={icon} href="#" aria-label={icon}>
                <img
                  src={`/images/${icon}.png`}
                  alt={`${icon} icon`}
                  className="border rounded-sm  w-5 h-5 hover:opacity-50"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
