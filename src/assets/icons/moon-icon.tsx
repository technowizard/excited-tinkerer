import { darkModeTransition } from '@/lib/constants';
import { motion } from 'framer-motion';

export function MoonIcon() {
  const variants = {
    animate: { rotate: 0, scale: 1, ...darkModeTransition },
    initial: { rotate: 90, scale: 0.6 },
  };

  return (
    <motion.svg
      height="1em"
      key="moon"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate="animate"
        d="M21.0292 14.0899C20.9706 13.8998 20.8386 13.7405 20.6624 13.6474C20.4863 13.5542 20.2808 13.535 20.0903 13.5941C17.3576 14.3453 14.4325 13.5706 12.4295 11.5661C10.4269 9.56159 9.65461 6.63551 10.4082 3.90383C10.4874 3.63935 10.4149 3.35279 10.2196 3.15743C10.0247 2.96255 9.73813 2.89055 9.47365 2.96975C5.11669 4.18943 2.25205 8.34671 2.66437 12.8525C3.07621 17.3582 6.64693 20.927 11.1532 21.3365C15.6589 21.7459 19.8148 18.8794 21.032 14.5214C21.0733 14.3808 21.0724 14.2306 21.0292 14.0899Z"
        fill="currentColor"
        initial="initial"
        variants={variants}
      />
    </motion.svg>
  );
}
