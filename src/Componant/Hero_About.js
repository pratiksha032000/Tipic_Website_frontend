import React from 'react'
import { motion } from "framer-motion"

export default function Hero_About() {
  return (
    <div>
          <section class="bg-transparent">
    <div class="py-8 px-4 mx-auto  text-center lg:py-16 lg:px-12">
    
        <motion.div 
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }} 
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
        >
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#78F9FD] md:text-5xl lg:text-6xl dark:text-blue-400">Welcome to our Comprehensive IT Solutions hub!</h1>
            </motion.div>
        
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
<span class=" font-bold uppercase text-white" >Tipic ConsulTech</span><span> helps to unlock new business potentials with innovative IT consulting services encompassing development, comprehensive testing, and operational excellence.

We are dedicated to harnessing the force of innovation to drive your business towards success. Based in Pune, India's dynamic IT hub, we offer global expertise in IT consulting services tailored to meet the ever-changing demands of businesses worldwide.</span>
 </p>
        
    </div>
</section>
    </div>
  )
}
