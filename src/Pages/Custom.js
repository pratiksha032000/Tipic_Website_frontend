import React from 'react'
function Custom(){
 
  return (
    <>
      
     <div id="carouselExampleDark" class=" carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={require("./freelance.png")} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 className='fw-bold '>Get Started with TiPiC</h1>
        <p>Discover the difference that custom software development can make for your business. Contact us today to discuss your project, explore possibilities, and embark on a journey to software excellence with TiPiC.</p>
      </div>
    </div>
    {/* <div class="carousel-item" data-bs-interval="2000">
      <img src={require("./sof classt.jpg")} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1> Bespoke Software Development</h1>
        <p>At TiPiC, we specialize in crafting bespoke software solutions that align perfectly with your business objectives. Our tailored approach ensures that every line of code is written with your specific requirements in mind, providing a competitive edge in your industry.</p>
      </div>
    </div> */}
    <div class="carousel-item">
      <img src={require("./globe.jpg")} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Scalable Solutions</h1>
        <p>.Prepare your business for growth with our scalable solutions. We design and develop software that can evolve alongside your business, accommodating increased data, users, and functionality without compromising performance.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
    <div class="col-md-6 px-0">
      {/* <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1> */}
      <p class="lead my-3 fw-bold text-7xl">•Tailored software development for small and medium enterprises and retail customers</p>
      <p class="lead mb-0  fw-bold">•	Customized solutions to meet specific existing or new business needs</p>
      <p class="lead my-3 fw-bold">•Integration of Advance BI (business intelligence) for strategic and informed decision-making</p>
      <p class="lead my-3 fw-bold">•Focusing on increasing sales, revenue, and profitability through data-driven insights</p>
      <p class="lead my-3 fw-bold">•Customizable development to address unique business requirements</p>
      <p class="lead my-3 fw-bold">•	Seamless integration with existing systems for enhanced efficiency and productivity</p>
      <p class="lead my-3 fw-bold">•	Continuous support and updates to ensure long-term and sustaining success</p>
      <p class="lead my-3 fw-bold">•	Use of customized development methodology like Waterfall Iterative, Agile or Dev-Ops as per business nature and need.</p>
      <p class="lead my-3 fw-bold">•	User-friendly interfaces designed for intuitive navigation</p>
      <p class="lead my-3 fw-bold">•	Robust security measures to safeguard sensitive data•	Scalable solutions adaptable to business growth and evolving needs</p>

    </div>
  </div>
    </>
  )
}

export default Custom