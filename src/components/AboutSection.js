import React from 'react';
import home1 from '../img/home1.png';

// import styled from 'styled-components';
import { Description, Hide, About, Image } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, photoAnim, fade } from '../Animation';

import Wave from './Wave';

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
              your <span>Dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>True</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </motion.p>
        <motion.button variants={fade}>Contact-Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="man with a guitar" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
