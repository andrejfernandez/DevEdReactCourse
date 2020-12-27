//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <Contact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact Us</h1>
    </Contact>
  );
};

export default ContactUs;

const Contact = styled(motion.div)`
  h1 {
    color: white;
  }
`;
