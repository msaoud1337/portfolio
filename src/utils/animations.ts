const DISTANCE = 400;

export const TRANSITION_ENTER1 = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const TRANSITION_ENTER2 = {
  duration: 1.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const varFadeInDown = {
  initial: { y: -DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER1 },
};

export const varFadeInRight = {
  initial: { x: DISTANCE, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER1 },
};

const TRANSITION_ENTER = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const TRANSITION_ENTER_FASTER = {
  duration: 0.32,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const varFadeInUp = {
  initial: { y: DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER },
};

export const varFadeInUpFaster = {
  initial: { y: DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER_FASTER },
};

export const parentAnimation = {
  initial: { x: 0, opacity: 1 },
  animate: { transition: { duration: 0.32, ease: [0.68, -0.55, 0.27, 1.55] } },
};

export const varFadeInRightSlow = {
  initial: { x: DISTANCE, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER2 },
};
