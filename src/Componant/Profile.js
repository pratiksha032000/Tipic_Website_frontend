import React from 'react';

const Profile = () => {
  return (
    <>
      <section className="container mx-auto p-10 md:p-20 antialiased mb-0">
        <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
          <img className="w-full max-h-[400px] object-cover md:w-52" src={require('./Prakash Pawar.jpeg')} alt=""/>
          <div>
            <div className="p-5 pb-10 bg-gray-700">
              <h1 className="text-2xl font-semibold text-blue-400 mt-5 ml-15 uppercase">
                Prakash Pawar
              </h1>
              <h1 className="text-1xl font-semibold text-gray-400 mt-2 uppercase">
                Founder / Managing Director
              </h1>
              <p className="text-xl text-gray-400 mt-2 mb-3 leading-relaxed">
                18 years of diverse experience in IT project management, Expertise spanning from waterfall to agile to DevOps. Our commitment to customer-centricity approach, guaranteeing continuous success through delivery of innovative IT solutions across various domains
              </p>
              <a href="https://www.linkedin.com/in/prakash-pawar-6b709917/" target="_blank">
                <button className="mt-7 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-blue-200 hover:bg-blue-500 font-bold text-white md:text-lg rounded-lg shadow-md">
                  KNOW MORE
                </button>
              </a>
            </div>
          </div>
        </article>
      </section>
     
      <section className="container mx-auto p-10 md:p-20 antialiased">
        <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
          <img className="w-full max-h-[800px] object-cover md:w-52" src={require('./rahul hole.jpg')} alt=""/>
          <div>
            <div className="p-5 pb-10 bg-gray-700">
              <h1 className="text-2xl font-semibold text-blue-400 mt-5 ml-15 uppercase">
                Rahul Hole
              </h1>
              <h1 className="text-1xl font-semibold text-gray-400 mt-2 uppercase">
              Chief Technology Development Consultant
              </h1>
              <p className="text-xl text-gray-400 mt-2 mb-3 leading-relaxed">
              Experienced Chief Technology Development Consultant with 18 years of expertise in C++, C#, Java, and .NET Framework. Specializes in designing complex, user-friendly software architectures and delivering high-quality, tailored solutions. Adept at ensuring data security and safety while building software solutions. Proven leader in managing complex projects and fostering stakeholder relationships, driving significant business outcomes.
              </p>
              <a href="https://www.linkedin.com/in/rahul-hole-9b01046/" target="_blank">
                <button className="mt-7 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-blue-200 hover:bg-blue-500 font-bold text-white md:text-lg rounded-lg shadow-md">
                  KNOW MORE
                </button>
              </a>
            </div>
          </div>
        </article>
      </section>
      
    </>
  );
};

export default Profile;
