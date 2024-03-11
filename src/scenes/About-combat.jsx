import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import "../index.css";
import useMediaQuery from "../hooks/useMediaQuery";

const AboutCombat = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="aboutCombat" className="mt-32">
      <div className="md:flex  md:justify-between md:gap-16 mt-32">
        {isAboveLarge ? (
          <>
            <div className="mt-16 md:mt-0">
              {isAboveLarge ? (
                <div
                  className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                >
                  <img alt="skills" className="z-10" src="assets/combat.png" />
                </div>
              ) : (
                <img alt="skills" className="z-10" src="assets/combat.png" />
              )}
            </div>
            <motion.div
              className="md:w-1/2"
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
                About <span className="text-red">ElectroCombat</span>
              </p>
              <LineGradient width="w-1/3" />
              <p className="mt-10 mb-7">
                The Mechatronics Technology Students Society of the University
                of Sri Jayewardenepura is proud to present ElectroCombat, the
                first robot battle event at the university. This groundbreaking
                initiative brings together tech enthusiasts, students, and
                professionals to explore the realm of robotics. By orchestrating
                this event, MTSS aims to nurture a culture of innovation,
                learning, and collaboration among the university community and
                beyond. ElectroCombat assures to be a thought-provoking and
                informative platform that showcases the potential of technology
                while empowering the future leaders in Sri Lanka.
              </p>
            </motion.div>
          </>
        ) : (
          <>
            
            <motion.div
              className="md:w-1/2"
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
                About <span className="text-red">ElectroCombat</span>
              </p>
              <LineGradient width="w-1/3" />
              <p className="mt-10 mb-7">
                The Mechatronics Technology Students Society of the University
                of Sri Jayewardenepura is proud to present ElectroCombat, the
                first robot battle event at the university. This groundbreaking
                initiative brings together tech enthusiasts, students, and
                professionals to explore the realm of robotics. By orchestrating
                this event, MTSS aims to nurture a culture of innovation,
                learning, and collaboration among the university community and
                beyond. ElectroCombat assures to be a thought-provoking and
                informative platform that showcases the potential of technology
                while empowering the future leaders in Sri Lanka.
              </p>
            </motion.div>
            <div className="mt-16 md:mt-0">
              {isAboveLarge ? (
                <div
                  className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                >
                  <img alt="skills" className="z-10" src="assets/combat.png" />
                </div>
              ) : (
                <img alt="skills" className="z-10" src="assets/combat.png" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AboutCombat;
