import React from 'react';

import home2 from '../img/home2.png';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

import { useScroll } from './ScrollAnim';

import { Description, About, Image } from '../styles';
import styled from 'styled-components';

import { scrollReveal } from '../Animation';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> works
        </h2>
        <Cards>
          <Card>
            <Icon>
              <img src={clock} alt="clock" />
              <h3>efficient</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={diaphragm} alt="clock" />
              <h3>diaphragm</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={money} alt="clock" />
              <h3>Affordable</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={teamwork} alt="clock" />
              <h3>teamwork</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="man with a guitar" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  /* flex-direction: row-reverse; */

  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
    @media (max-width: 1300px) {
      padding-right: 2rem;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 2rem;
    color: black;
    background: white;
    padding: 5px;
  }
`;

export default ServicesSection;
