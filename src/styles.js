import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

  @media (max-width: 1300px) {
    font-size: 60%;
    display: block;
    text-align: center;
    padding: 2rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;

    button {
      margin-bottom: 1.5rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
