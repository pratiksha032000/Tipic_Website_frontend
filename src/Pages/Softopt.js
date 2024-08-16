import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Softopt() {
  const [renderKey, setRenderKey] = useState(0);

  const cardVariants = {
    hidden: { opacity: 0, y: -20 }, // Set y to -20 to animate from top to bottom
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };
  useEffect(() => {
    setRenderKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <>
      <motion.section
        className="bg-gradient-to-r from-blue-300 to-indigo-900 py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }} 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
        <div className="text-white">

          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl">
            Elevate Your Efficiency: Unleashing Seamless Software Operations for Unrivaled Performance!
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl">
            Offering customized software operation delivery services to meet the specific needs of each client.
            Where Efficiency Meets Excellence: Empowering Businesses through Superior Software Operations.
            We're dedicated to optimizing your systems, ensuring unparalleled performance and driving success to new heights.
          </p>
        </div>
        </motion.div>
      </motion.section>

      <div>
        <div className="max-w-[1310px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 my-2 lg:mt-5">
          {[
            { title: 'Tailored Solutions for Software Operation', text: 'Offering customized software operation delivery services to meet the specific needs of each client.' },
            { title: 'Reliability and Stability', text: "Ensuring a robust foundation for clients' operations, focusing on stability and reliability." },
            { title: 'Scalability', text: 'Providing solutions that can grow and adapt alongside clients\' businesses, ensuring long-term viability.' },
            { title: 'Security Measures', text: 'Implementing stringent security protocols to safeguard clients\' data and systems against potential threats.' },
            { title: 'Expertise in Cloud Services', text: 'Specializing in cloud-based solutions, including setup, migration, and optimization for enhanced performance.' },
            { title: 'Seamless Integration', text: 'Integrating new software solutions seamlessly with existing systems and workflows to minimize disruption.' },
            { title: 'Dev-Ops Adoption', text: 'Employing agile, Dev-Ops practices to deliver projects efficiently, adapt to changing requirements, and foster collaboration.' },
            { title: 'Client-Centric Approach', text: 'Placing clients\' needs and satisfaction at the forefront, with a commitment to delivering value and exceeding expectations.' }
          ].map((item, index) => (
            <motion.div
              className="shadow-lg rounded bg-[#C4E4FF]"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              key={`${renderKey}-${index}`}
            >
              <h2 className="font-bold text-2xl text-blue-800 p-2">
                {item.title}
              </h2>
              <p className="p-3 text-start text-black font-normaly ml-3">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Softopt;
