import styled from "styled-components";
import { Link } from "react-router-dom";

// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnimMovie,
  movieTitleAnim,
  lineAnim,
  slider,
  sliderContainer,
  fade,
} from "../animation";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={movieTitleAnim}>The Athlete</motion.h2>
        <motion.div
          variants={lineAnim}
          className="line"
          initial="hidden"
          animate="show"
        ></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img src={athlete} alt="Athlete" variants={photoAnimMovie} />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={movieTitleAnim}>The Racer</motion.h2>
        <motion.div
          variants={lineAnim}
          className="line"
          initial="hidden"
          animate="show"
        ></motion.div>{" "}
        <Link to="/work/the-racer">
          <Hide>
            <motion.img src={theracer} alt="Racer" variants={photoAnimMovie} />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={movieTitleAnim}>Good Times</motion.h2>
        <motion.div
          variants={lineAnim}
          className="line"
          initial="hidden"
          animate="show"
        ></motion.div>{" "}
        <Link to="/work/good-times">
          <Hide>
            <motion.img
              src={goodtimes}
              alt="Good Times"
              variants={photoAnimMovie}
            />
          </Hide>
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
  padding-bottom: 10rem;
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

const Hide = styled.div`
  overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8bfe;
`;

const Frame3 = styled(Frame1)`
  background: #e8d2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
