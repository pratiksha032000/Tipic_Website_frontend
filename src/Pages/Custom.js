import React from 'react';
import './Custom.css'; // Import the custom CSS file

function Custom() {
  return (
    <div className="overflow-x-scroll custom-container">
      <style>
        {`
          @keyframes scroll-left-to-right {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .custom-container {
            overflow-x: hidden; /* Prevents scrollbar from showing */
          }

          .animated-text {
            animation: scroll-left-to-right 2s ease-out;
          }
        `}
      </style>
      <div className="overflow-hidden">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={require("./freelance.png")} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block animated-text">
                <h1 className='fw-bold'>Get Started with TiPiC</h1>
                <p>Discover the difference that custom software development can make for your business. Contact us today to discuss your project, explore possibilities, and embark on a journey to software excellence with TiPiC.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={require("./globe.jpg")} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block animated-text">
                <h1>Scalable Solutions</h1>
                <p>Prepare your business for growth with our scalable solutions. We design and develop software that can evolve alongside your business, accommodating increased data, users, and functionality without compromising performance.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark animated-text">
          <div className="col-md-6 px-0">
            <ul className="list-disc ml-4">
              <li className="lead my-3 fw-bold">Tailored software development for small and medium enterprises and retail customers</li>
              <li className="lead my-3 fw-bold">Customized solutions to meet specific existing or new business needs</li>
              <li className="lead my-3 fw-bold">Integration of Advance BI (business intelligence) for strategic and informed decision-making</li>
              <li className="lead my-3 fw-bold">Focusing on increasing sales, revenue, and profitability through data-driven insights</li>
              <li className="lead my-3 fw-bold">Customizable development to address unique business requirements</li>
              <li className="lead my-3 fw-bold">Seamless integration with existing systems for enhanced efficiency and productivity</li>
              <li className="lead my-3 fw-bold">Continuous support and updates to ensure long-term and sustaining success</li>
              <li className="lead my-3 fw-bold">Use of customized development methodology like Waterfall Iterative, Agile or Dev-Ops as per business nature and need</li>
              <li className="lead my-3 fw-bold">User-friendly interfaces designed for intuitive navigation</li>
              <li className="lead my-3 fw-bold">Robust security measures to safeguard sensitive data</li>
              <li className="lead my-3 fw-bold">Scalable solutions adaptable to business growth and evolving needs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom;
