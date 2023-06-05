"use client";
import { useSidebarStore } from "@/store/useSidebarStore";
import { motion, TargetAndTransition } from "framer-motion";

import { Logo } from "./Logo";

const animations: TargetAndTransition = {
  opacity: [0, 1],
  y: [-20, 0],
  transition: {
    delay: 0.3,
    duration: 0.3,
    bounce: 0,
  },
};

export const Header = () => {
  const openSidebar = useSidebarStore(({ openSidebar }) => openSidebar);

  return (
    <header className="bg-theme-dark-700 border-b-2 border-theme-dark-500 flex items-center h-24">
      {!openSidebar && (
        <motion.div
          animate={animations}
          className="px-6 py-8 border-r-2 border-theme-dark-500"
        >
          <Logo />
        </motion.div>
      )}

      {!openSidebar ? (
        <motion.h1
          animate={{
            ...animations,
            transition: {
              ...animations.transition,
              delay: 0.4,
            },
          }}
          className="text-2xl font-bold ml-6"
        >
          Platform Launch
        </motion.h1>
      ) : (
        <h1 className="text-2xl font-bold ml-6">Platform Launch</h1>
      )}
    </header>
  );
};
