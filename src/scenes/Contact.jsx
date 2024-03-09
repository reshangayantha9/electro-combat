import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-48 flex flex-col justify-center items-center">
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
          Contact us<span className="text-red"> {" "}or more details</span>
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
          <div className="w-full mx-auto relative text-center ">
            <li className="my-8 first:mt-0 last:mb-0 w-[60%]mx-auto flex flex-col justify-center items-center ">
              <h3 className="capitalize font-bold ">  SAVINDU - 0779790415 </h3>
              <span className="contact-title">Stay tuned with us for a whole new experience with ElectroCombat</span>
              <br />
              <span className="text-xl">Organized By</span>
              <br />
              <span>Mechatronics Technology Students Society of University of Sri Jayewardenepura</span>
              
            </li>
          </div>
        </motion.div>
    </section>
  );
};

export default Contact;
