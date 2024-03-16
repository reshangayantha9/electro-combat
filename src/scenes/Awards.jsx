import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
function Awards() {
  return (
    <section
      id="awards"
      className=" mt-12 flex flex-col justify-center items-center"
    >
      <div className="md:flex  md:justify-between md:gap-16">
        <motion.div
          className="md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            Winning <span className="text-red">Prices</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>
      <motion.div
          className="md:w-full mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="w-full mx-auto relative text-left ">
            <li className="my-8 first:mt-0 last:mb-0 w-[60%]mx-auto flex flex-col justify-center items-center ">
              <h3 className="capitalize font-bold text-2xl">  1st Place - 100, 000 </h3>
              
              
            </li>
          </div>
        </motion.div>
        <motion.div
          className="md:w-full mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="w-full mx-auto relative text-left ">
            <li className="my-8 first:mt-0 last:mb-0 w-[60%]mx-auto flex flex-col justify-center items-center ">
              <h3 className="capitalize font-bold text-2xl">2nd Place - 80, 000 </h3>

            </li>
          </div>
        </motion.div>
        <motion.div
          className="md:w-full mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
         <div className="w-full mx-auto relative text-left ">
            <li className="my-8 first:mt-0 last:mb-0 w-[60%]mx-auto flex flex-col justify-center items-center ">
              <h3 className="capitalize font-bold text-2xl"> 3rd Place - 60, 000 </h3>
                          </li>
          </div>
        </motion.div>
    </section>
  );
}

export default Awards;
