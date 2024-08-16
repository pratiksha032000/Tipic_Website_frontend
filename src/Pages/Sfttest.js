import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Sfttest() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -20 }, // Set y to -20 to animate from top to bottom
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

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
          transition={{ duration: 0.7 }} 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
        <div className="text-white">
        
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl">
            Unleashing the Power of Reliability: Elevate Your Software's Performance with Our Testing Solutions.
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl">
            Step into a world of bug-free brilliance as we empower your software with our advanced testing solutions.
            Experience unparalleled reliability as you elevate your software's performance with our cutting-edge testing solutions. Our robust tools and methodologies ensure a seamless and bug-free user experience, empowering your software to achieve new heights of efficiency and dependability.
          </p>
        </div>
        </motion.div>
      </motion.section>

      <motion.div
        ref={ref}
        className="max-w-[1300px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-2"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {[
          { title: 'Comprehensive Testing Solutions', text: 'Offering end-to-end testing services covering all stages of the software development lifecycle.' },
          { title: 'Diverse QA Expertise', text: 'Specializing in testing across various domains, including functional, performance, security, and compatibility testing.' },
          { title: 'Scalability', text: 'Providing solutions that can grow and adapt alongside clients\' businesses, ensuring long-term viability.' },
          { title: 'Security Measures', text: 'Implementing stringent security protocols to safeguard clients\' data and systems against potential threats.' },
          { title: 'Advanced Tools and Technologies', text: 'Utilizing cutting-edge testing tools and methodologies to ensure thorough and efficient testing processes.' },
          { title: 'Quality Assurance Focus', text: 'Placing a strong emphasis on quality assurance to identify and resolve defects early in the development cycle.' },
          { title: 'Continuous Improvement', text: 'Committing to ongoing learning and improvement to stay abreast of industry best practices and emerging trends.' },
          { title: 'Client Satisfaction', text: 'Prioritizing client satisfaction by delivering high-quality testing services that meet or exceed expectations, on time and within budget.' },
          { title: 'Continous Testing', text:   'In DevOps, quality is paramount. Our expert QA team ensures continuous testing throughout the entire SDLC, maintaining high standards and seamless integration with development processes.'},
        ].map((item, index) => (
          <motion.div
            className="shadow-lg rounded bg-[#C4E4FF] hover:bg-[#B0D4F6] transition-colors duration-300"
            variants={cardVariants}
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="font-bold text-2xl  text-blue-800 p-2">
               {item.title}
            </h2>
            <p className="p-3 text-start text-black font-normal ml-3">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Sfttest;
