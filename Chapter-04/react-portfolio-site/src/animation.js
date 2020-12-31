export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.25,
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
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 1.5, ease: "easeOut", duration: 1.5 },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.5,
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const photoAnimMovie = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const movieTitleAnim = {
  hidden: { opacity: 0, x: -1000 },
  show: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 0.75, ease: "easeOut" },
  },
};

export const lineAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 1, ease: "easeOut", duration: 1.5 },
  },
};

export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};
