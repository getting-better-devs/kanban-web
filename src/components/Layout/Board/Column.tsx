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
      <motion.span className="text-theme-grey-900 uppercase text-xs font-bold tracking-[2.4px] leading-4 before:p-0 flex before:flex before-items-center before:mr-3 before:w-[15px] before:h-[15px] before:rounded-full before:bg-theme-purple-200 relative left-0 top-0">
        {title} ({tasksLength})
      </motion.span>

      {children}
    </motion.li>
  );
};
