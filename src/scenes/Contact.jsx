import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact py-20 flex flex-col justify-center items-center"
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
            Contact us<span className="text-red"> or more details</span>
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
            <div className="contact-wrap">
              <div className="contact-body">
                <div className="contact-name">NUWAN MADAWA</div>
                <div className="contact-details">
                  President <br /> MTSS <br /> University of Sri Jayewardenepura <br /> 0770528008 <br />
                  nuwanm96@icloud.com
                </div>
              </div>
              <br />
              <div className="contact-body">
                <div className="contact-name uppercase">Savindu Hasanka</div>
                <div className="contact-details">
                Event Chair<br />ElectroCombat <br /> University of Sri Jayewardenepura <br /> 0779790415 <br />
                savinduhasanka@icloud.com
                </div>
              </div>
            </div>
            <span className="contact-title">
              Stay tuned with us for a whole new experience with ElectroCombat
            </span>
            <br />
            <span className="text-xl">Organized By</span>
           
          <br />
            <span>
              Mechatronics Technology Students Society of University of Sri
              Jayewardenepura
            </span>
            <br />
            <div className="mt-5 flex items-center justify-center gap-10">
            <div className="usjp">
            <img
              alt="profile"
              className="w-full !max-w-[100px] md:!max-w-[150px] shadow-lg rounded-full max-w-full h-auto align-middle border-none"
              src="assets/usjp.png"
            />
            </div>
            <div className="usjp">
            <img
              alt="profile"
              className="w-full !max-w-[100px] md:!max-w-[150px] shadow-lg rounded-full max-w-full h-auto align-middle border-none"
              src="assets/mecha.png"
            />
            </div>
          </div>
          </li>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
