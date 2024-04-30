import React from 'react'
import {Link } from 'react-router-dom';
import { motion } from "framer-motion"

export default function Hero_Home() {
  return (
    <section class="mb-40 overflow-hidden">
 
  
  <div
    class="relative overflow-hidden  bg-cover bg-no-repeat bg-[50%] h-[500px] bg-[url('https://images.unsplash.com/photo-1480365443306-930b898cb434?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
      <div class="flex h-full items-center justify-center">
        <div class="px-6 text-center text-white md:px-12">
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }} 
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
        >
          <h1 class="mt-6 mb-16 sm:text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Empowering the New Generation  <br /><span class=" text-[#78F9FD] sm:text-3xl md:text-4xl lg:text-5xl">Delivering Innovative IT Services </span>
           <br/> <span class="text-4xl text-[#78F9FD] sm:3xl md:4xl lg:5xl"> To meet Evolving Business Needs</span>
          </h1>
          </motion.div>
          <Link class="mb-2 inline-block rounded-full hover:border-2  px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" to="/Services" role="button">Our Services</Link>
          <Link class="inline-block  rounded-full hover:border-2  hover:border-gray-100 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-20 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
            data-te-ripple-init data-te-ripple-color="light" to="/About" role="button">About Us</Link>
        </div>
      </div>
    </div>
  </div>

  <div
    class="-mt-2.5 text-white dark:text-neutral-800 md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center]">
    <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
        fill="currentColor"></path>
    </svg>
  </div>
 
</section>
  )
}
