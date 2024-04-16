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
      <p className="font-playfair font-semibold text-4xl mb-3">
        AWARENESS <span className="text-red">SESSION 1</span>
      </p>
      <LineGradient width="w-1/3" />
      <p className="font-playfair font-semibold text-base mt-10 uppercase md:leading-normal leading-relaxed">
        <span className="text-2xl">
          topic : Best Practices in Battlebot design
        </span>
        <br />
        date : 21<sup>st</sup> April 2024 <br />
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
        {isEnabled ? (
          <button
            className="custom-btn btn-11 !text-sm !w-[180px] !h-[40px] !shadow-none"
          >
            <a
              href="https://learn.zoom.us/j/94058856053?pwd=T3AzQjBUU29uOVdFTjdrc3dUZUFJQT09"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-center`}
            >
              Join via zoom<div className="dot"></div>
            </a>
          </button>
        ) : (
          <button
            className="custom-btn btn-11 !text-sm !w-[180px] !h-[40px] !shadow-none"
          >
            Join via zoom<div className="dot"></div>
          </button>
        )}
        {isEnabled ? (
          <p className="mt-5 text-center">
            Meeting ID: 940 5885 6053 <br />
            Passcode: 6La2x*=H
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Event;
