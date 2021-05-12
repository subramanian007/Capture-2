import React from 'react';

import { motion } from 'framer-motion';
import { PageAnimation, contactTitleAnim } from '../Animation';
import styled from 'styled-components';

const ContactUs = () => {
  return (
    <Contact
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: 'white' }}
    >
      <Title>
        <motion.h2 variants={contactTitleAnim}>Our contact</motion.h2>
      </Title>
      <div>
        <Hide>
          <Social variants={contactTitleAnim}>
            <Circle />
            <h2>Contact us at Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={contactTitleAnim}>
            <Circle />
            <h2>Contact us at phones</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={contactTitleAnim}>
            <Circle />
            <h2>Contact us at Social-Medias</h2>
          </Social>
        </Hide>
      </div>
    </Contact>
  );
};

const Contact = styled(motion.div)`
  padding: 5rem 10rem;
  width: 100%;
  height: 90vh;

  @media (max-width: 1300px) {
    padding: 2rem 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  overflow: hidden;
  @media (max-width: 1300px) {
    margin-top: 2rem;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
`;

const Circle = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 3rem;
  background: #23d997;
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default ContactUs;
