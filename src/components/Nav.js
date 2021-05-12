/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/"> About us</Link>
          <Line
            initial={{ width: '0%' }}
            animate={{
              width: pathname === '/' ? '50%' : '0%',
              transition: { duration: 0.75 },
            }}
          />
        </li>
        <li>
          <Link to="/OurWork"> Our work</Link>
          <Line
            initial={{ width: '0%' }}
            animate={{
              width: pathname === '/OurWork' ? '50%' : '0%',
              transition: { duration: 0.75 },
            }}
          />
        </li>
        <li>
          <Link to="/ContactUs"> Contact</Link>
          <Line
            initial={{ width: '0%' }}
            animate={{
              width: pathname === '/ContactUs' ? '50%' : '0%',
              transition: { duration: 0.75 },
            }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  z-index: 2;
  top: 0;
  a {
    text-decoration: none;
    color: white;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;

    #logo {
      display: inline-block;
      margin: 0.5rem;
    }

    ul {
      padding: 1.8rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
