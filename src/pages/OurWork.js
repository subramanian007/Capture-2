import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theRacer from '../img/theracer-small.png';
import athelete from '../img/athlete-small.png';
import goodTimes from '../img/goodtimes-small.png';
import { useScroll } from '../components/ScrollAnim';
import ScrollTop from '../components/ScrollTop';

import { motion } from 'framer-motion';
import {
  PageAnimation,
  fade,
  photoAnim,
  lineAnim,
  sliderAnim,
  sliderContainerAnim,
} from '../Animation';

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <motion.div variants={sliderContainerAnim}>
        <Frame1 variants={sliderAnim}></Frame1>
        <Frame2 variants={sliderAnim}></Frame2>
        <Frame3 variants={sliderAnim}></Frame3>
        <Frame4 variants={sliderAnim}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/OurWork/the-racer">
          <Hide>
            <motion.img variants={photoAnim} src={theRacer} alt="theRacer" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade} animate={controls} initial="hidden" ref={element}>
        <h2 variants={fade}>The Athelete</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/OurWork/the-athlete">
          <Hide>
            <img variants={photoAnim} src={athelete} alt="theRacer" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        variants={fade}
        animate={controls2}
        initial="hidden"
        ref={element2}
      >
        <h2 variants={fade}>GoodTimes</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/OurWork/good-times">
          <Hide>
            <img variants={photoAnim} src={goodTimes} alt="theRacer" />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  overflow: hidden;
  padding: 5rem 10rem;
  min-height: 100%;
  h2 {
    /* color: white; */
    margin: 1.5rem 2rem;
    color: #000000;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  margin-bottom: 10rem;
  /* background: yellow; */
  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8ebf;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
