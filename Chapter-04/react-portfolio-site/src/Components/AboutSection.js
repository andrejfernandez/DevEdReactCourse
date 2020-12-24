import home1 from "../img/home1.png";

// Styled
import { About, Description, Image, Hide } from "../Styles";
// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography/videography jobs such as Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Quod debitis ipsa
          mollitia natus impedit, nihil culpa cumque consequatur voluptatum ad
          quas quae maiores odit saepe perspiciatis? Explicabo ipsum beatae non?
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Dude with camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
