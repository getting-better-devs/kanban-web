"use client";
import React, { ReactNode } from "react";

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

  const Title = ({ children }: { children: ReactNode }) => {
    const className = "text-2xl font-bold ml-6 cursor-default";
    return !openSidebar ? (
      <motion.h1
        className={className}
        animate={{
          ...animations,
          transition: {
            ...animations.transition,
            delay: 0.4,
          },
        }}
      >
        {children}
      </motion.h1>
    ) : (
      <h1 className={className}>{children}</h1>
    );
  };

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

      <Title>Plataform Launch</Title>
    </header>
  );
};
