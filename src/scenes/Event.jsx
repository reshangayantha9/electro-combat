import React from 'react'
import { motion } from "framer-motion";
import LineGradient from '../components/LineGradient';
function Event() {
  return (
    <div className=" mt-[70px]">
    <p className="font-playfair font-semibold text-4xl mb-3">
            AWARENESS <span className="text-red">SESSION 1</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="font-playfair font-semibold text-lg mt-8 uppercase text-center">
           <span className='text-xl'>Best Practices in Battlebot design</span>  <br/>
            21st April 2024 <br /> 6.00 P.M. Onwards
          </p>
    <div className="flex justify-between items-center flex-col">
    
        <motion.div
        className="md:w-full flex justify-center items-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        
        <div className="md:w-[50%]">
            <img src="assets/session1.jpg" alt="" srcset="" className='w-[100%]'/>
        </div>
      </motion.div>
        <a href="https://"target="_blank"rel="noopener noreferrer" className='text-center'>
              <button className="custom-btn btn-11">
                Join via zoom<div className="dot"></div>
              </button>
            </a>

    </div>
        </div>
  )
}

export default Event