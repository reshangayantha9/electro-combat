import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
function About() {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="about" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
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
          About <span className="text-red">Us</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          The Mechatronics Technology Students Society of the University of Sri Jayewardenepura was established on January 2, 2024, with the aim of promoting student interaction and developing the soft skills required by students to reach their full potential for future employment. Being a leading university in Sri Lanka with a state-of-the-art technology faculty, we bring you the boldest and smartest individuals who are eager to tackle challenges and discover new dimensions. Even though we just stepped on stage, we were able to join the IEEE student branch of the University of Sri Jayewardenepura as the principle supporter of the J'pura expedition, an insightful event on science and technology. We are a community dedicated to educating, developing, and enhancing the technical and professional skills of undergraduates.
</p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/team.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/team.png" />
          )}
        </div>
      </div>
      
      
       
    </section>
  )
}

export default About