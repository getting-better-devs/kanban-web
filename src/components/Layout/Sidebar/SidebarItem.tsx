import React from "react";

import { motion, Variants } from "framer-motion";

export const SidebarItem = ({
  children,
  variants,
  className = "",
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}) => {
  return (
    <motion.span
      variants={variants}
      className={`transition-colors font-bold capitalize text-sm leading-4 flex gap-3 text-theme-grey-900 hover:bg-theme-purple-200 hover:text-white cursor-pointer rounded-r-full py-4 px-8 ${className}`}
    >
      {children}
    </motion.span>
  );
};
