import { useState } from 'react';
import axios from 'axios';



 
function Form_Axios(){
 
 
  const data = {name:'',company:'' ,mobile:'',email:'',queries:''};
  const [inputData,setContact] = useState(data);
  const handleData =(e)=>{
      setContact({...inputData,[e.target.name]:e.target.value})
  }
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputData.name.length === 0){

         alert("Name has left Blank!");
       }
      else if(inputData.company.length === 0){

        alert("Company Name has left Blank!");
      }
       else if(inputData.mobile.length !== 10){
         alert("Please Enter 10 digit Mobile Number!");
       }
       else if(typeof inputData.mobile.length!== "number"  ){
        alert("Please type Mobile Number in Valid Format Ex: 999999999");
      }
       else if(inputData.mobile.length === 0){
        alert("Mobile has left Blank!");
      }
       else if(inputData.email.length === 0){
         alert("Email has left Blank!")
       }
       else if (!inputData.email.includes("@") || !inputData.email.includes(".")){
        alert("Not A Valid Email ID ")
       }
       else{
        
    
    axios.post('http://localhost:8080/savecontact',inputData)
    .then(response=>  console.log('contact sent'))
    .catch(error=> alert(error));
           
           }
   
  }
return (
<>

<section class="bg-transparent">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12">
        <h1 className='text-gray-300 font-bold text-3xl mb-4'>Mission: </h1>
        <p class="max-w-xl text-lg text-gray-400">
        Our mission is to empower businesses by providing cutting-edge technology solutions that enable them to unlock their full potential in the digital era. Through our commitment to excellence and innovation, we strive to guide organizations on their journey towards thriving in an ever-changing landscape. We are dedicated to delivering tailored, simplified IT solutions that drive sustainable growth, foster agility, and ensure our clients' success in the dynamic world of business.
        </p>

        <div class="mt-8">
          <a href="#" class="text-2xl font-bold text-[#78F9FD]"> customer.care@tipic.in</a>
          <h1 className='text-gray-300 font-bold text-1xl mt-4 mb-2'>Address: </h1>
          <address class="mt-2 not-italic text-gray-400">Tipic ConsulTech Pvt. Ltd. ,Office No.18 - Level 2, Konark Buisness Park , Keshavnagar, Pune - 411036</address>
        </div>
      </div>

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" class="space-y-4">
          <div className='flex '>
            <p class="text-red-600 text-2xl p-3">*</p>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Enter Your Name"
              type="text"
              name='name'
              required
              value={inputData.name}
              onChange={handleData}
            />
          </div>

          <div className=' flex '>
          <p class="text-red-600 text-2xl p-3">*</p>
            <label class="sr-only" for="company">Company</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Enter Company Name"
              type="text"
              name='company'
              required
              value={inputData.company}
              onChange={handleData}
            />
          </div>

          <div class=" grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className='mr-5 flex '>
            <p class="text-red-600 text-2xl p-3">*</p>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                name='email'
                required
                value={inputData.email}
                onChange={handleData}
              />
            </div>

            <div className='  flex '>
            <p class="text-red-600 text-2xl p-3">*</p>
              <label class="sr-only" for="mobile">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                name='mobile'
                required
                // onKeyUp={numberonly(this)}
                value={inputData.mobile}
                onChange={handleData}
              />
            </div>
          </div>

          <div className=''>
          
            <label class="sr-only" for="queries">Message</label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="2"
              name='queries'
              required
              value={inputData.queries}
              onChange={handleData}
            ></textarea>
          </div>

          <div class="mt-4 flex  ">
            <button
              type="submit" onClick={handleSubmit}
              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-white hover:text-gray-900 sm:w-auto"
            >
             Submit
            </button>
            <p className='ml-10 '><span className='text-red-600 text-2xl  ml-4'>*</span> <span className='text-1xl '> fields are mandatory</span></p><span></span>
          </div>
         
        </form>
      </div>
    </div>
  </div>
</section>
         
</>               
)
}

export default Form_Axios;