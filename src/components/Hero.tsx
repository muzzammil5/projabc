import React from 'react'
{/*import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";*/}
import Link from 'next/link';



export default function Hero() {
    return (

        <div className='flex justify-center items-center pf-10'>
            <div className='max-w-[1440px] flex gap-6 justify-center'>
                <div className='border-r-2 border-neutral-200 p-10 hidden md:block'>



{/* First Image on Hero Section*/}

                    <div className='flex-items-center bg-black rounded-log p-12 px-36'>
                        <div className='text-white flex flex-col justify-centerspace-y-5 sm:2[180px] md:w[360px]'>
                        <div className='flex items-center gap-2'>
 {/*                           <FaFacebookF /> <FaTwitter /> <FaPinterestP /> */}
                            <span className='sm:text-sm md:text-base font-semibold'> </span>

                                {" "}
                            
                                <img src='images\vert.png' alt='Logos' />
                            
                            
                                <h2 className="text-2xl font-great-vibes">Its Quick & Amusing!</h2>
                                <h1 className="flex items-center text-3xl font-bold text-yellow-500">
                                Th</h1>
                            <p className='flex items-start'>e Art of speed food Quality</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Varius sed pharetra dictum neque massa congue</p>
                            


                            {/*Heading*/}
                            
                            <Link href={"#products"}
                                className='underline underline-offset-4 hover:font-semibold flex items-center gap-2'
                            >
                                
                                
                            </Link>

                            {/*Image*/}

                            <div className='ml-auto'>
                                
                                <img src='images\hero-dish.png' alt='iphone' />

                <button className='bg-yellow-500 border rounded-full font-bold px-24 p-6 gap-y-5'>See Menu</button>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}


