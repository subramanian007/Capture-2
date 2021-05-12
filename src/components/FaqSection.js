import React from 'react';

import { About } from '../styles';
import styled from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';

import { scrollReveal } from '../Animation';
import { useScroll } from './ScrollAnim';

import Toggle from './Toggle';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How are you?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed.
            </p>
          </div>
        </Toggle>
        <Toggle title="How well you do?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed.
            </p>
          </div>
        </Toggle>
        <Toggle title="How do you manage?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed.
            </p>
          </div>
        </Toggle>
        <Toggle title="What about the cost?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: block;
    padding-bottom: 2rem;
  }

  h2 {
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    width: 100%;
    margin: 1.5rem 0rem;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  p {
    padding: 1.5rem 0rem;
  }
`;

export default FaqSection;
