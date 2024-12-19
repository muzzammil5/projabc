
import Link from 'next/link'
import React from 'react'


export default function Header() {
    return (
        <header className="bg-slate-400 flex items-center justify-between px-6 py-4 text-blue">
            <div className="flex items-center text-2xl font-bold">


                Food<span className="text-yellow-500">tuck</span>
            </div>
            <div>
                <div className="bg-black-400 screen-w" ></div>
            </div>
            <nav>
                <ul className="flex gap-6 text-sm">
                    <Link href="/"><li className="underline: dark:inset-4 hover:text-black-500 cursor-pointer hover:underline hover:font-semibold">Home</li></Link>
                    <Link href="#"><li className="hover:text-black-500 cursor-pointer">Menu</li></Link>
                    <Link href="#"> <li className="hover:text-black-500 cursor-pointer">Blog</li> </Link>
                    <Link href="#"><li className="hover:text-black-500 cursor-pointer">Pages</li></Link>
                    <Link href="#"><li className="hover:text-black-500 cursor-pointer">About</li></Link>
                    <Link href="#"><li className="hover:text-black-500 cursor-pointer">Shop</li></Link>
                    <Link href="#"><li className="hover:text-black-500 cursor-pointer">Contact</li></Link>
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

        </header>


    )
}
