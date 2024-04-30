import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    
      

<footer class="bg-transparent w-full ">
    <div class="mx-auto  p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0  w-[30%]">
            <Link to={"/"} class="flex items-center">
            <img src={require('./ConsulTech Logo.png')} class="object-scale-down h-12 w-25 me-3 md:h-20 md:w-40 " alt="Tipic Logo" />
                  
            </Link>
              
          </div>
          <div class="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3 pl-15 md:w-[70%] ">
              <div>
                  <h2 class="mb-6 text-sm font-semibold  uppercase text-white">SERVICES</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-6">
                          <Link to="/Costom" class="hover:underline">Software Devlopment</Link>
                      </li>
                      <li className='pb-5'>
                          <Link to="/Sfttest" class="hover:underline">Software Testing</Link>
                      </li>
                      <li>
                          <Link to="/SoftOpt" class="hover:underline">Software Operation</Link>
                      </li>
                      
                </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Contact us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <Link to="https://www.linkedin.com/company/tipic-consultech/about/" class="hover:underline ">LinkedIn</Link>
                      </li>
                      <li>
                          <Link to="mailto:customer.care@tipic.in" class="hover:underline">E-Mail</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold  uppercase text-white">About</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <Link to="/PrivacyPolicy" class="hover:underline">Privacy Policy</Link>
                      </li>
                      <li>
                          <Link to="/TermsandConditions" class="hover:underline">Terms &amp; Conditions</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm  sm:text-center text-white ">© 2024 <Link to="/" class="hover:underline">TIPIC™</Link>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              
              <Link to="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </Link>
             
          </div>
      </div>
    </div>
</footer>

  
  )
}
