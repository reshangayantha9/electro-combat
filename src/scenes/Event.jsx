import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { useState } from "react";
import { useEffect } from "react";
function Event() {
  const [isEnabled, setIsEnabled] = useState(false);
  const targetDateTime = new Date("2024-04-21T14:30:00");

  useEffect(() => {
    const checkDateTime = () => {
      const currentDate = new Date();
      setIsEnabled(currentDate >= targetDateTime);
    };
    checkDateTime();
    const intervalId = setInterval(checkDateTime, 1000);
    return () => clearInterval(intervalId);
  });
  useEffect(() => {
    console.log("isEnabled:", isEnabled);
  }, [isEnabled]);

  return (
    <div className=" mt-[70px]">
      <p className="font-playfair font-semibold text-4xl md:mt-72 mb-3">
        AWARENESS <span className="text-red">SESSION 1</span>
      </p>
      <LineGradient width="w-1/3" />
      <p className="font-playfair font-semibold text-base mt-10 uppercase md:leading-normal leading-relaxed">
        <span className="text-2xl">topic : How to make a battlebot</span>
        <br />
        date : 21<sup className="lowercase">st</sup> April 2024 <br />
        time : 6.00 PM Onwards
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
            <img
              src="assets/session1.jpg"
              alt=""
              srcset=""
              className="w-[100%]"
            />
          </div>
        </motion.div>
        <a href="https://www.youtube.com/watch?v=miitzwbSJc8&t=2s"target="_blank"rel="noopener noreferrer">
        <button className="custom-btn btn-11 !text-sm !w-[180px] !h-[40px] !shadow-none">
          Watch now<div className="dot"></div>
        </button></a>
      </div>
    </div>
  );
}

export default Event;
