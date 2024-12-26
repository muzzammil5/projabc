'use client'
import React, { useState } from "react"
import Header from "@/components/Header"; // Import your existing Header component
import Hero from "@/components/Hero"; // Import your existing Hero component
import Footer from "@/components/Footer"; // Import your existing Footer component
// ab code ko push kro aur dekho 
const FAQPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqData = [


        {
            question: "How we serve food?",
            short: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
        },
        {
            question: "How can we get in touch with you?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
        },
        {
            question: "How is our food quality?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
        },
        {
            question: "What will be delivered? And When?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
        },
        {
            question: "How do we give home delivery?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
        },
        {
            question: "Is this restaurant 24 hours open?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
        },
    ];

    return (
        <div className="bg-black text-white">
            {/* Header */}



            <div className="max-w-6xl mx-auto px-6 py-12">
                <h1 className="text-center text-4xl font-bold text-White-500 mb-4">FAQ Page</h1>
                <h2 className="text-center text-4xl font-bold text-black-500 mb-4">Questions Look Here</h2>
                <p className="text-center text-gray-300 mb-10">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-stone-500 p-6 rounded-md shadow-lg">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="text-lg font-semibold">{faq.question}</h3>
                                {/* <h4 className="text-xs text-black-400">{faq.short}</h4> */}
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

        </div>
    );
};

export default FAQPage;
