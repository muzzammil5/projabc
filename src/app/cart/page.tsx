"use client";


import React, { useState } from "react";
import Header from "@/components/Header"; // Adjust path
import Footer from "@/components/Footer"; // Adjust path

const ShoppingCart: React.FC = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Burger", price: 35.0, quantity: 1, total: 221.00, image: "/images/burger.png" },
        { id: 2, name: "Fresh Lime", price: 25.0, quantity: 1, total: 521.00, image: "/images/lime.png" },
        { id: 3, name: "Pizza", price: 15.0, quantity: 1, total: 421.00, image: "/images/pizza.png" },
        { id: 4, name: "Chocolate Muffin", price: 45.0, quantity: 1, total: 521.00, image: "/images/muffin.png" },
        { id: 5, name: "Cheese Butter", price: 15.0, quantity: 1, total: 325.00, image: "/images/butter.png" },
    ]);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta), total: (item.quantity + delta) * item.price }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const cartSubtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
    const shippingCharge = 0.0;
    const totalAmount = cartSubtotal + shippingCharge;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* <Header /> */}

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Shopping Cart</h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-left">
                                <th className="p-4">Product</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Quantity</th>
                                <th className="p-4">Total</th>
                                <th className="p-4">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id} className="border-t">
                                    <td className="p-4 flex items-center">
                                        <img src={item.image} alt={item.name} className="w-38 h-16 object-cover rounded-lg mr-4" />
                                        <div>
                                            {/* <h3 className="font-medium text-gray-800">{item.name}</h3> */}
                                            {/* <p className="text-sm text-gray-600">★ ★ ★ ★ ☆</p> */}

                                        </div>
                                    </td>
                                    <td className="p-4">${item.price.toFixed(2)}</td>
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <button
                                                className="px-2 py-1 bg-gray-200 rounded-lg"
                                                onClick={() => updateQuantity(item.id, -1)}
                                            >
                                                -
                                            </button>
                                            <span className="px-4">{item.quantity}</span>
                                            <button
                                                className="px-2 py-1 bg-gray-200 rounded-lg"
                                                onClick={() => updateQuantity(item.id, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-4">${item.total.toFixed(2)}</td>
                                    <td className="p-4">
                                        <button
                                            className="text-black-600"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 ">


                    {/* Coupon Code */}

                    <div>
                        <h2 className="text-lg font-medium text-gray-700 mb-4">Coupon Code</h2>

                        <h3 className="text-gray-400 text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque diam pellentesque bibendum non</h3>

                        <input
                            type="text"
                            placeholder="Enter Here code"
                            className="w-96 border rounded-lg p-2 mb-4" />
                        <span> <button className="bg-[#FF9F0D] text-white py-2 px-4 rounded-lg">Apply</button> </span>
                    </div>

                    {/* Total Bill */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-lg font-bold text-gray-700 mb-4">Total Bill</h2>
                        <div className="space-y-2 border p-3">
                            <div className="flex justify-between text-gray-700">
                                <span>Cart Subtotal</span>
                                {/* <span>${cartSubtotal.toFixed(2)}</span> */}
                                $120.00
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Shipping Charge</span>
                                <span>${shippingCharge.toFixed(2)}</span>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between text-lg font-medium text-gray-800">
                                <span>Total Amount</span>
                                {/* <span>${totalAmount.toFixed(2)}</span> */}
                                $205.00
                            </div>
                        </div>
                        <button className="bg-[#FF9F0D] text-white w-full py-2 mt-4 rounded-lg">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </main>

            {/* <Footer /> */}
        </div>
    );
};

export default ShoppingCart;
