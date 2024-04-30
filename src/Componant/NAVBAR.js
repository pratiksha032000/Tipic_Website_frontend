import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from 'flowbite-react'
export default function NAVBAR() {
  return (
    


<Navbar fluid className='bg-transparent'>
     <NavbarBrand as={Link} href="https://tipic.in">
     <Link to="/"> <img src={require('./ConsulTech Logo.png')} class="object-scale-down h-20 w-40 me-3" alt="Tipic Logo1" /></Link>
      </NavbarBrand>
      <div className='bg-gray-900'>
      <NavbarToggle />
      </div>
      
      <NavbarCollapse>
        
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
         <li>
         
         <Link className='text-white sm:pl-7 sm:mb-10 text-base md:p-2 lg:p-10 uppercase hover:text-[#78F9FD] ' to="/">Home</Link>
        </li>
        <li>
         
         <Link className='text-white sm:pl-7 sm:mb-10 text-base  md:p-2 lg:p-10 uppercase hover:text-[#78F9FD]' to="/Services">Services</Link>
        </li>
        
        <li>
         
         <Link className='text-white sm:pl-7 sm:mb-10 text-base md:p-2 lg:p-10 uppercase hover:text-[#78F9FD]' to="/About">About us</Link>
        </li>
        <li>
         
         <Link className='text-white sm:pl-7 sm:mb-10 text-base md:p-2 lg:p-10 uppercase hover:text-[#78F9FD]' to="/Contact">Contact us</Link>
        </li>
          
        
//       </ul>   
        
      </NavbarCollapse>
    </Navbar>

  )
}
