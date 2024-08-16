/*import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function CUSTOM() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      const listItems = document.querySelectorAll('.scroll-animation');
      for (let i = 0; i < listItems.length; i++) {
        await controls.start((index) => ({
          scale: [0.5, 1],
          opacity: [0, 1],
          transition: { delay: index * 0.3, duration: 0.8 }
        }));
      }
    };

    sequence();
  }, [controls]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-300 to-indigo-900 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white"
        >
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }} 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl">
            Discover the difference that custom software development can make for your business.
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl">
            Prepare your business for growth with our scalable solutions. We design and develop software that can evolve alongside your business, accommodating increased data, users, and functionality without compromising performance.
          </p>
        </motion.div>
        </motion.div>
      </motion.section>
      <div className="items-center md:ml-40">
        <motion.div
          initial={{ x: '-100%', opacity: 0 }} // Initially off-screen to the left
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.2 }} // Adjust duration and delay as needed
          className="p-4 p-md-5 mb-4 rounded bg-rgb(6 5 24) shadow-lg text-gray-100 w-[80%]"
        >
          <div className="col-md-6 mx-auto">
            <ul className="pl-4 mb-8">
              {[
                "Tailored software development for small and medium enterprises and retail customers",
                "Customized solutions to meet specific existing or new business needs",
                "Integration of Advanced BI (business intelligence) for strategic and informed decision-making",
                "Focusing on increasing sales, revenue, and profitability through data-driven insights",
                "Customizable development to address unique business requirements",
                "Seamless integration with existing systems for enhanced efficiency and productivity",
                "Continuous support and updates to ensure long-term and sustaining success",
                "Use of customized development methodology like Waterfall Iterative, Agile or Dev-Ops as per business nature and need",
                "User-friendly interfaces designed for intuitive navigation",
                "Robust security measures to safeguard sensitive data",
                "Scalable solutions adaptable to business growth and evolving needs"
              ].map((text, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={controls}
                  className="my-3 font-semibold text-xl text-wrap scroll-animation"
                >
                  ➢ {text}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}*/
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function CUSTOM() {
  const [animationsTriggered, setAnimationsTriggered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (!animationsTriggered) {
      const sequence = async () => {
        const listItems = document.querySelectorAll('.scroll-animation');
        for (let i = 0; i < listItems.length; i++) {
          await controls.start((index) => ({
            scale: [0.5, 1],
            opacity: [0, 1],
            transition: { delay: index * 1, duration: 1 }
          }));
        }
        setAnimationsTriggered(true);
      };

      sequence();
    }
  }, [animationsTriggered, controls]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-300 to-indigo-900 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl">
              Discover the difference that custom software development can make for your business.
            </h1>
            <p className="mb-8 text-lg font-normal lg:text-xl">
              Prepare your business for growth with our scalable solutions. We design and develop software that can evolve alongside your business, accommodating increased data, users, and functionality without compromising performance.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
      <div className="items-center md:ml-40">
        <motion.div
          initial={{ x: '-100%', opacity: 0 }} // Initially off-screen to the left
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.2 }} // Adjust duration and delay as needed
          className="p-4 p-md-5 mb-4 rounded bg-rgb(6 5 24) shadow-lg text-gray-100 w-[80%]"
        >
          <div className="col-md-6 mx-auto">
            <ul className="pl-4 mb-8">
              {[
                "Tailored software development for small and medium enterprises and retail customers",
                "Customized solutions to meet specific existing or new business needs",
                "Integration of Advanced BI (business intelligence) for strategic and informed decision-making",
                "Focusing on increasing sales, revenue, and profitability through data-driven insights",
                "Customizable development to address unique business requirements",
                "Seamless integration with existing systems for enhanced efficiency and productivity",
                "Continuous support and updates to ensure long-term and sustaining success",
                "Use of customized development methodology like Waterfall Iterative, Agile or Dev-Ops as per business nature and need",
                "User-friendly interfaces designed for intuitive navigation",
                "Robust security measures to safeguard sensitive data",
                "Scalable solutions adaptable to business growth and evolving needs"
              ].map((text, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={controls}
                  className="my-3 font-semibold text-xl text-wrap scroll-animation"
                >
                  ➢ {text}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}
