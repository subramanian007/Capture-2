// import { motion } from 'framer-motion';

export const PageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

export const photoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

export const lineAnim = {
  hidden: {
    width: '0%',
  },
  show: {
    width: '100%',
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

export const sliderAnim = {
  hidden: {
    x: '-130%',
    skew: '45deg',
  },
  show: {
    x: '100%',
    skew: '0deg',
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

export const sliderContainerAnim = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      staggerChildren: 0.15,
    },
  },
};

export const scrollReveal = {
  hidden: {
    scale: 1.2,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

export const contactTitleAnim = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};
