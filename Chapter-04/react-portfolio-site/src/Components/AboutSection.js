import home1 from "../img/home1.png";

// Styled
import { About, Description, Image, Hide } from "../Styles";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography/videography jobs such as Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Quod debitis ipsa
          mollitia natus impedit, nihil culpa cumque consequatur voluptatum ad
          quas quae maiores odit saepe perspiciatis? Explicabo ipsum beatae non?
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img src={home1} alt="Dude with camera" variants={photoAnim} />
      </Image>
    </About>
  );
};

export default AboutSection;
