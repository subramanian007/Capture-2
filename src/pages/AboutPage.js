import React from 'react';

//import Pages parts
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

import ScrollTop from '../components/ScrollTop';

import { motion } from 'framer-motion';
import { PageAnimation } from '../Animation';

function AboutPage() {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />;
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
}

export default AboutPage;
