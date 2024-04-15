import React from 'react'
import { motion } from "framer-motion";
function Event() {
  return (
    <>
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
            <img src="assets/session1.jpg" alt="" srcset="" className='w-[100%] md:mt-14'/>
        </div>
      </motion.div>
        <a href="https://"target="_blank"rel="noopener noreferrer" className='text-center'>
              <button className="custom-btn btn-11">
                Join with us<div className="dot"></div>
              </button>
            </a>

    </div>
        </>
  )
}

export default Event