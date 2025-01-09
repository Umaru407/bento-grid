'use client';
 
import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';
 
export function GradualSpacing({ text = 'Gradual Spacing',delay=0,className }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="flex space-x-1 justify-start">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay:(delay + i) * 0.1 }}
            className={`text-xl text-left sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] ${className} `}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}