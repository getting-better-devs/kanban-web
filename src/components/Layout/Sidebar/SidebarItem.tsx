import React from "react";

import { motion, Variants } from "framer-motion";

export const SidebarItem = ({
  children,
  variants,
}: {
  children: React.ReactNode;
  variants?: Variants;
}) => {
  return (
    <motion.span
      variants={variants}
      className="transition-colors font-bold capitalize text-theme-grey-900 text-sm leading-4 flex gap-3 hover:bg-theme-purple-200 hover:text-white cursor-pointer rounded-r-full py-4 px-8"
    >
      {children}
    </motion.span>
  );
};
