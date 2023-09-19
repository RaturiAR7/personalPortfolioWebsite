import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I know</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {window.innerWidth > "551" ? (
          technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))
        ) : (
          <div>
            {technologies.map((technology) => (
              <div
                className=" w-28 h-28 mt-20 flex flex-col justify-center"
                key={technology.name}
              >
                <img
                  className="animate-pulse hover:animate-bounce rounded-lg"
                  // style={{ height: "100px", backgroundColor: "dark" }}
                  src={technology.icon}
                  alt="icon"
                />
                <p className=" text-[17px] max-w-3xl leading-[30px] text-center">
                  {technology.name.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
