import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleStyle layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <motion.div layout className="faq-line"></motion.div>
    </ToggleStyle>
  );
};

const ToggleStyle = styled(motion.div)`
  padding: 3rem 0rem;
  cursor: pointer;
`;

export default Toggle;
