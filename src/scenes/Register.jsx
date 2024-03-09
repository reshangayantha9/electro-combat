import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import "../index.css";

const Register = () => {
  return (
    <section id="register" className="mt-32">
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
            <span className="text-red">REGISTRATION</span>
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
            <a href="https://tripetto.app/run/AOPVV00112">
              <button className="custom-btn btn-11">
                Register now<div className="dot"></div>
              </button>
            </a>
            <a className ="handbook"href="#"target="_blank">ElectroCombat Handbook</a>
          </li>
        </div>
      </motion.div>
    </section>
  );
};

export default Register;
