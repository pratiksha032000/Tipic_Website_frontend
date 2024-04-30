import React from 'react'
import Profile from '../Componant/Profile'
import Hero_About from '../Componant/Hero_About.js'


export default function ABOUT() {
  return (
    <>
    <Hero_About/>
    <div  > <h1 class="text-gray-200  text-center font-bold lg:text-5xl md:text-3xl">Experts in Tipic ConsulTech</h1>
    </div>
    <div className= 'mx-auto grid md:grid-cols-1  lg:grid-cols-1 justify-items-center gap-5 my-10'>
     
        <Profile/>
      
      
    </div>
     
    </>
  )
}
