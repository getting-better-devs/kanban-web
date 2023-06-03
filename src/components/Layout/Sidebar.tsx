"use client";

import { Fragment } from "react";

import { useSidebarStore } from "@/store/useSidebarStore";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

import BoardIcon from "../../../public/icons/board.svg";
import { Logo } from "./Logo";
import { OpenSidebar } from "./OpenSidebar";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useSidebarStore(
    ({ openSidebar, setOpenSidebar }) => [openSidebar, setOpenSidebar]
  );

  const logoAnimation = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const item = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const list = {
    visible: {
      width: 320,
      padding: "2rem 1.5rem 2rem 1.5rem",

      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },

    hidden: {
      width: 0,
      padding: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <Fragment>
      <AnimatePresence>
        {openSidebar && (
          <motion.nav
            key="nav"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={list}
            className="bg-theme-dark-700 border-r-2 border-theme-dark-500 flex flex-col gap-6 justify-center h-screen w-1/5 relative top-0 left-0"
          >
            <motion.div className="w-full mb-3" variants={logoAnimation}>
              <Logo />
            </motion.div>

            <motion.h2
              variants={item}
              className="font-bold uppercase text-theme-grey-900 text-xs leading-4 tracking-[2.4px] mt-3"
            >
              All Boards (1)
            </motion.h2>

            <motion.span
              variants={item}
              className="font-bold capitalize text-theme-grey-900 text-sm leading-4 mt-3 flex gap-3"
            >
              <BoardIcon />
              Platform Launch
            </motion.span>

            <motion.span
              variants={item}
              className="font-bold capitalize text-theme-grey-900 text-sm leading-4 mt-3 flex gap-3"
            >
              <BoardIcon />
              Marketing Plan
            </motion.span>

            <motion.span
              variants={item}
              className="font-bold capitalize text-theme-grey-900 text-sm leading-4 mt-3 flex gap-3"
            >
              <BoardIcon />
              Roadmap
            </motion.span>

            <motion.span
              variants={item}
              className="font-bold capitalize text-theme-purple-200 text-sm leading-4 mt-3 flex gap-3"
            >
              <BoardIcon />+ Create New Board
            </motion.span>

            <motion.div
              variants={logoAnimation}
              onClick={() => setOpenSidebar(!openSidebar)}
              className="mt-auto mr-auto flex items-center gap-2 text-theme-grey-900 cursor-pointer"
            >
              <EyeSlashIcon className="w-4 h-4 text-theme-grey-900" />
              <span className="text-sm">Hide Sidebar</span>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>{!openSidebar && <OpenSidebar />}</AnimatePresence>
    </Fragment>
  );
};
