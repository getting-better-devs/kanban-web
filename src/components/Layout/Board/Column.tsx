"use client";

import { motion } from "framer-motion";

export const Column = ({
  title,
  tasksLength,
  children,
}: {
  title: string;
  tasksLength: number;
  children: React.ReactNode;
}) => {
  const FADE_IN_ANIMATION_VARIANTS = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const letters = title.concat(` (${tasksLength})`).split("");

  return (
    <motion.li
      className="space-y-6 w-72"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
            staggerDirection: 1,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      <div className="flex items-center">
        <motion.span className="inline mr-3 w-[15px] h-[15px] rounded-full bg-theme-purple-200" />

        <div className="inline">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={FADE_IN_ANIMATION_VARIANTS}
              initial="initial"
              animate="animate"
              custom={i}
              className="text-theme-grey-900 uppercase text-xs font-bold tracking-[2.4px] leading-4 inline"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {children}
    </motion.li>
  );
};
