/* import Header from "@/components/Header";*/
import React from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import FoodCategory from "@/components/FoodCategory";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import ChefsSection from "@/components/ChefsSection";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";


/* import Header from "@/components/Header";
import Hero from "@/components/Hero";
*/




export default function Home() {
  return (

    <main>

      {/* <header className="bg-black flex items-center justify-between px-6 py-4 text-blue">
        <div className="flex items-center text-2xl font-bold">


          Food<span className="text-yellow-500">tuck</span>
        </div>
        <div>
          <div className="bg-black-400 screen-w" ></div>
        </div>
        <nav>
          <ul className="flex gap-6 text-sm">
            <li className="underline: dark:inset-4 hover:text-black-500 cursor-pointer hover:underline hover:font-semibold">Home</li>
            <li className="hover:text-black-500 cursor-pointer">Menu</li>
            <li className="hover:text-black-500 cursor-pointer">Blog</li>
            <li className="hover:text-black-500 cursor-pointer">Pages</li>
            <li className="hover:text-black-500 cursor-pointer">About</li>
            <li className="hover:text-black-500 cursor-pointer">Shop</li>
            <li className="hover:text-black-500 cursor-pointer">Contact</li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 text-black rounded"
          />
          <button className="p-2 text-black-500 font-bold border border--500 rounded">
            Cart

          </button>

        </div>

      </header> */}
      <Header />
      <Hero />
      <FoodCategory />
      <WhyChooseUs />
      <StatsSection />
      <HeroSection />
      <MenuSection />
      <ChefsSection />
      <TestimonialSection />
      <BlogSection />
      <Footer />
    </main>
  );
};





/*

<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
*/