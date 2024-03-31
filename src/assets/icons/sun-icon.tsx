import { darkModeTransition } from '@/constants/motion';
import { motion } from 'framer-motion';

export function SunIcon() {
  const raysVariants = {
    animate: { rotate: 0, ...darkModeTransition },
    initial: { rotate: 45 },
  };

  const coreVariants = {
    animate: { scale: 1, ...darkModeTransition },
    initial: { scale: 1.5 },
  };

  return (
    <motion.svg
      fill="none"
      height="1em"
      key="sun"
      // centers the rotation anchor point vertically & horizontally
      style={{ originX: '50%', originY: '50%' }}
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        animate="animate"
        cx="11.9998"
        cy="11.9998"
        fill="currentColor"
        initial="initial"
        r="5.75375"
        variants={coreVariants}
      />
      <motion.g animate="animate" initial="initial" variants={raysVariants}>
        <circle
          cx="3.08982"
          cy="6.85502"
          fill="currentColor"
          r="1.71143"
          transform="rotate(-60 3.08982 6.85502)"
        />
        <circle
          cx="3.0903"
          cy="17.1436"
          fill="currentColor"
          r="1.71143"
          transform="rotate(-120 3.0903 17.1436)"
        />
        <circle cx="12" cy="22.2881" fill="currentColor" r="1.71143" />
        <circle
          cx="20.9101"
          cy="17.1436"
          fill="currentColor"
          r="1.71143"
          transform="rotate(-60 20.9101 17.1436)"
        />
        <circle
          cx="20.9101"
          cy="6.8555"
          fill="currentColor"
          r="1.71143"
          transform="rotate(-120 20.9101 6.8555)"
        />
        <circle cx="12" cy="1.71143" fill="currentColor" r="1.71143" />
      </motion.g>
    </motion.svg>
  );
}
