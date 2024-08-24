import React, { useEffect, useState } from "react";
// import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import "../index.css";
import "./countdown.css";

const Register = () => {
  return (
    <section id="sessions" className="mt-32">
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
