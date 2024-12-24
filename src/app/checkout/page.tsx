// src/app/checkout/page.tsx
import React from "react";
import Header from "@/components/Header"; // Adjust the path to your Header component
import Footer from "@/components/Footer"; // Adjust the path to your Footer component

const CheckoutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            {/* <Header /> */}

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Shipping Address Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-lg font-medium text-gray-700 mb-4">Shipping Address</h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="border rounded-lg p-2 text-gray-700"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="border rounded-lg p-2 text-gray-700"
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="border rounded-lg p-2 text-gray-700"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="border rounded-lg p-2 text-gray-700"
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="border rounded-lg p-2 text-gray-700"
                                />
                                <select className="border rounded-lg p-2 text-gray-700">
                                    <option>Choose country</option>
                                    <option>Pakistan</option>
                                    <option>Iran</option>
                                    <option>Iraq</option>
                                    <option>Yemen</option>

                                </select>
                                <select className="border rounded-lg p-2 text-gray-700">
                                    <option>Choose city</option>
                                    <option>Karachi, Pak</option>
                                    <option>Lahore, Pak</option>
                                    <option>Hyderabad, Pak</option>
                                    <option>Tehran, Iran</option>
                                    <option>Mashad, Iran</option>
                                    <option>Karbala, Iraq</option>
                                    <option>Kazmain, Iraq</option>
                                    <option>Sanaa, Yemen</option>
                                    <option>Hodidieh, Yemen</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Zip code"
                                    className="border rounded-lg p-2 text-gray-700"
                                />
                                <input
                                    type="text"
                                    placeholder="Address 1"
                                    className="border rounded-lg p-2 text-gray-700 col-span-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Address 2"
                                    className="border rounded-lg p-2 text-gray-700 col-span-2"
                                />
                                <div className="flex items-center col-span-2">
                                    <input type="checkbox" id="billing-address" className="mr-2" />
                                    <label htmlFor="billing-address" className="text-gray-700">
                                        Same as shipping address
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">
                                Back to cart
                            </button>
                            <button className="bg-[#FF9F0D] text-white py-2 px-4 rounded-lg">
                                Proceed to shipping
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-lg font-medium text-gray-700 mb-4">Order Summary</h2>
                            <div className="space-y-4">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="flex items-center">
                                        <img
                                            src="/images/tikka.png" // Replace with actual image path
                                            alt="Chicken Tikka Kabab"
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div className="ml-4">
                                            <h3 className="text-gray-800 font-medium">Chicken Tikka Kabab</h3>
                                            <p className="text-sm text-gray-600">150 gm net</p>
                                            <p className="text-sm text-gray-600">$50</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr className="my-4" />
                            <div className="space-y-2">
                                <div className="flex justify-between text-gray-700">
                                    <span>Sub-total</span>
                                    <span>$130</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Discount</span>
                                    <span>25%</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Tax</span>
                                    <span>$54.76</span>
                                </div>
                                <hr className="my-4" />
                                <div className="flex justify-between text-lg font-medium text-gray-800">
                                    <span>Total</span>
                                    <span>$432.65</span>
                                </div>
                            </div>
                            <button className="bg-[#FF9F0D] text-white w-full py-2 mt-4 rounded-lg">
                                Place an order
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default CheckoutPage;
