
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import developingImage from './devloping.png';
import opsImage from './ops.png';
import testingImage from './testing.png';

export default function Soft_dev() {
    const navigate = useNavigate();

    return (
        <>
       
            <div class="max-w-full md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="overflow-hidden">
                    <img class="w-full rounded-t-lg hover:scale-125 duration-1000" src={developingImage} alt="" />
                </div>
                <div class="p-3">
                    <h5 class="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Software Development</h5>
                    <p class="mb-3 text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-400">We – Tipic ConsulTech, specialize in crafting customized software solutions for small and medium enterprises, catering to both retail clients and enterprise businesses alike. Our software applications are cost-effective.</p>
                    <Link to="/Costom" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>

            <div class="max-w-full md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="overflow-hidden">
                    <img class="w-full rounded-t-lg hover:scale-125 duration-1000" src={opsImage} alt="" />
                </div>
                <div class="p-3">
                    <h5 class="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Software Operation</h5>
                    <p class="mb-4 text-sm md:text-base lg:text-lg font-normal text-gray-700 dark:text-gray-400">At Tipic ConsulTech, we specialize in delivering comprehensive software operational services tailored to the specific needs of small and medium enterprises. Our commitment lies in establishing a sturdy foundation of stability.</p>
                    <Link to="/softopt" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>

            <div class="max-w-full md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="overflow-hidden">
                    <img class="w-full rounded-t-lg hover:scale-125 duration-1000" src={testingImage} alt="" />
                </div>
                <div class="p-3">
                    <h5 class="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Software Testing Solutions</h5>
                    <p class="mb-3 text-sm md:text-base lg:text-lg font-normal text-gray-700 dark:text-gray-400">Welcome to Quality World of Tipic ConsulTech, where we are passionately committed to ensuring the flawless performance and dependability of software products through meticulous testing services.</p>
                    <Link to="/sfttest" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
           
        </>
    );
}
