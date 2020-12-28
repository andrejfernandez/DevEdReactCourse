import styled from "styled-components";
import { Link } from "react-router-dom";
import { Image } from "../Styles";

// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, movieTitleAnim } from "../animation";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Movie>
        <motion.h2 variants={movieTitleAnim} initial="hidden" animate="show">
          The Athlete
        </motion.h2>
        <motion.div className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Image>
            <motion.img src={athlete} alt="Athlete" variants={photoAnim} />
          </Image>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <Image>
            <motion.img src={theracer} alt="Racer" variants={photoAnim} />
          </Image>
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <Image>
            <motion.img src={goodtimes} alt="Good Times" variants={photoAnim} />
          </Image>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 5em;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  h2 {
    color: white;
    text-align: right;
  }
`;

export default OurWork;
