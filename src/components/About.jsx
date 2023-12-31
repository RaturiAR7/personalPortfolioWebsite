import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className='flex md:flex-row flex-col w-full'>
        <div className='md:w-1/2'>
          <motion.p
            variants={fadeIn("", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Welcome to my portfolio website! I'm excited to share my skills,
            experience, and projects with you. As a computer undergrad, I have a
            passion for creating innovative and effective solutions that solve
            real-world problems. This website serves as a showcase of my work,
            providing you with an insight into my skills and expertise. I have
            expertise in a range of programming languages, including JavaScript,
            C++, C, Python, and Java. My proficiency in these languages allows
            me to create functional and efficient solutions, tailored to meet
            the needs of my clients. Whether it's building dynamic web
            applications using JavaScript or developing complex algorithms in
            C++, I have the technical expertise to bring your ideas to life.
            Whether you're an employer, potential client, or simply curious
            about my work, I hope this website gives you a glimpse into my
            abilities and inspires you to collaborate with me. Thank you for
            visiting, and please feel free to explore my portfolio and get in
            touch with any questions or opportunities.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("", 0.1, 2)}
          className=' flex items-center flex-row md:flex-row justify-center md:w-1/2'
        >
          <img
            className='items-center w-72 h-72 md:w-96 md:h-96'
            src='/ans2.png'
          />
        </motion.div>
      </div>
      <div className='mt-20 flex flex-wrap justify-around gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
