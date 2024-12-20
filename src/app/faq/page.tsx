'use client'
import React, { useState } from "react"
import Header from "/projabc/src/components/Header"; // Import your existing Header component
import Hero from "/projabc/src/components/Hero"; // Import your existing Hero component
import Footer from "/projabc/src/components/Footer"; // Import your existing Footer component

const FAQPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqData = [
        {
            question: "How are items fixed?",
            answer: "Items are carefully handled by our team and fixed with utmost precision to meet quality standards.",
        },
        {
            question: "How can we get in touch with you?",
            answer: "You can reach us through email, phone, or the contact form available on our website.",
        },
        {
            question: "How is our food quality?",
            answer: "Our food is prepared with fresh ingredients and utmost care to ensure top quality and taste.",
        },
        {
            question: "What will be delivered? And when?",
            answer: "Delivery includes freshly prepared meals, and it usually takes 30–45 minutes depending on your location.",
        },
        {
            question: "How do we gain home delivery?",
            answer: "Home delivery is available through our website or app. Place your order, and we’ll deliver it to your door.",
        },
        {
            question: "Is this restaurant 24 hours open?",
            answer: "Our restaurant operates from 8:00 AM to 10:00 PM. Please check our website for holiday schedules.",
        },
    ];

    return (
        <div className="bg-black text-white">
            {/* Header */}
            <Header />

            FAQ Section
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h1 className="text-center text-4xl font-bold text-yellow-500 mb-4">FAQ Page</h1>
                <p className="text-center text-gray-300 mb-10">
                    Questions Looks Here. Lorem ipsum to simply dummy text to offer any professional industry.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-md shadow-lg">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="text-lg font-semibold">{faq.question}</h3>
                                <span className="text-yellow-500 text-2xl">{activeIndex === index ? "-" : "+"}</span>
                            </div>
                            {activeIndex === index && (
                                <p className="mt-4 text-gray-400 transition-opacity">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default FAQPage;
