import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../index.css";
import "./countdown.css";

const Register = () => {
  const inputDate="10 Nov 2025";
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // const [inputDate, setInputDate] = useState("25 MARCH 2024");
  const [currentDate, setCurrentDate] = useState(inputDate);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date()) 
    }, 1000);
    return () => clearInterval(intervalId);
  }, [])
  useEffect(() => {
    const changingDate = new Date(inputDate);
    const currentDate = new Date();
    const totalSeconds = (changingDate - currentDate) / 1000;

    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
    setSeconds(Math.floor(totalSeconds % 60));
  }, [inputDate,currentDate]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  return (
    <section id="registration" className="mt-32">
      <div className="md:flex md:justify-between md:gap-16">
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
          ElectroCombat <span className="text-red">Robot Battle</span>
          </p>
          <linearGradient width="w-1/3" />
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
        <div className="w-full mx-auto relative  text-center ">
          <li className="my-8 first:mt-0 last:mb-0 w-[60%]mx-auto flex flex-col justify-center items-center ">
            <p className="contact-title">Please read robot design rules before applying</p>
          <a href="https://drive.google.com/file/d/115c4magzvYkgiCPOM0G2N9IpNBc74iPp/view?usp=sharing" target="_blank"rel="noopener noreferrer">
              <button className="custom-btn btn-11 !text-sm !w-[180px] !h-[40px] !shadow-none">
              Robot design rules<div className="dot"></div>
              </button>
            </a>
            <a href="https://tripetto.app/run/AOPVV00112"target="_blank"rel="noopener noreferrer">
              <button className="custom-btn btn-11">
                Register now<div className="dot"></div>
              </button>
            </a>
            
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
        <div className="w-full mx-auto relative  text-center ">
        <p className="contact-title uppercase !text-[40px]">Registrations Closing in</p>
          <li className="my-8 first:mt-0 !mt-0 last:mb-0 w-[60%]mx-auto flex flex-col justify-center items-center ">
            <div className="countdown-container">
              <div className="countdown-values count-wrap">
                
                <div className="countdown-value">
                  <p className="big-text">{days}</p>
                  <span>days</span>
                </div>
                <div className="countdown-value">
                  <p className="big-text">{hours}</p>
                  <span>hours</span>
                </div>
                <div className="countdown-value">
                  <p className="big-text">{minutes}</p>
                  <span>mins</span>
                </div>
                <div className="countdown-value">
                  <p className="big-text">{seconds}</p>
                  <span>seconds</span>
                </div>
              </div>
            </div>
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
        <div className="w-full mx-auto relative  text-center ">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/tVkWyJMmL2c?si=aqrJvveKOWaswRI1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Register;
