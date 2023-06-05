"use client";

import { Fragment } from "react";

import { useSidebarStore } from "@/store/useSidebarStore";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion, Variants } from "framer-motion";

import BoardIcon from "../../../../public/icons/board.svg";
import { Logo } from "../Logo";
import { OpenSidebar } from "./OpenSidebar";
import { SidebarItem } from "./SidebarItem";

const animations: {
  [key: string]: Variants;
} = {
  default: {
    visible: {
      opacity: 1,
    },

    hidden: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  },

  nav: {
    visible: {
      width: 320,

      transition: {
        type: "spring",
        bounce: 0,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },

    hidden: {
      width: 0,

      transition: {
        type: "spring",
        when: "afterChildren",
        bounce: 0,
      },
    },
  },

  items: {
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
        duration: 0.1,
      },
    },
  },
};

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useSidebarStore(
    ({ openSidebar, setOpenSidebar }) => [openSidebar, setOpenSidebar]
  );

  return (
    <Fragment>
      <AnimatePresence>
        {openSidebar && (
          <motion.nav
            key="nav"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animations.nav}
            className="bg-theme-dark-700 h-screen relative top-0 left-0 border-r-2 border-theme-dark-500"
          >
            <div className="py-8 pr-6 flex flex-col justify-center h-full">
              <motion.div
                className="w-full mb-3 pl-8"
                variants={animations.default}
              >
                <Logo />
              </motion.div>

              <motion.h2
                variants={animations.items}
                className="transition-colors font-bold uppercase text-theme-grey-900 text-xs leading-4 tracking-[2.4px] mt-10 mb-3 pl-8"
              >
                All Boards (1)
              </motion.h2>

              <SidebarItem variants={animations.items}>
                <BoardIcon /> Platform Launch
              </SidebarItem>

              <SidebarItem variants={animations.items}>
                <BoardIcon /> Marketing Plan
              </SidebarItem>

              <SidebarItem variants={animations.items}>
                <BoardIcon /> Roadmap
              </SidebarItem>

              <SidebarItem variants={animations.items}>
                <BoardIcon />+ Create New Board
              </SidebarItem>

              <motion.div
                variants={animations.default}
                onClick={() => setOpenSidebar(!openSidebar)}
                className="mt-auto flex items-center gap-2 text-theme-grey-900 cursor-pointer transition-colors rounded-r-sm w-full pl-8 group hover:text-white hover:bg-theme-purple-200 py-4 px-8"
              >
                <EyeSlashIcon className="w-4 h-4 text-theme-grey-900 group-hover:text-white" />
                <span className="text-sm">Hide Sidebar</span>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>{!openSidebar && <OpenSidebar />}</AnimatePresence>
    </Fragment>
  );
};
