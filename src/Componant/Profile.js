 import React from 'react'
 
 export default function Profile() {
   return (
	<>
<section class="container mx-auto p-10 md:p-20 antialiased ">
    <article
        class=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
        <img class="w-full max-h-[400px] object-cover md:w-52" src={require('./Prakash Pawar.jpeg')} alt=""/>
        <div class="">
            <div class="p-5 pb-10 bg-gray-700">
                <h1 class="text-2xl font-semibold text-blue-400 mt-5 ml-15 uppercase ">
                    Prakash Pawar
                </h1>
                <h1 class="text-1xl font-semibold text-gray-400 mt-2  uppercase ">
                   Founder / Managing Diractor
                </h1>
                <p class="text-xl text-gray-400 mt-2 mb-3 leading-relaxed">
                18 years of diverse experience in IT project management, Expertise spanning from waterfall to agile to DevOps. Our commitment to customer-centricity approach, guaranteeing continuous success through delivery of innovative IT solutions across various domains
                </p>
                <a href="https://www.linkedin.com/in/prakash-pawar-6b709917/">
                <button class="mt-7 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-blue-200 hover:bg-blue-500 font-bold text-white md:text-lg rounded-lg shadow-md">
              KNOW MORE
            </button>
            </a>
            </div>
            
        </div>
    </article>
</section>

 </>

     
   )
 }
 