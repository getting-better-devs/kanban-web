"use client";

import { motion } from "framer-motion";

import { TaskComponent } from "./types";

export const Task = ({ description, subtasks }: TaskComponent) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      className="w-full max-h-32 bg-theme-dark-700 px-4 py-6 rounded-lg cursor-pointer"
    >
      <p className="font-white text-base font-bold text-ellipsis overflow-hidden line-clamp-3">
        {description}
      </p>
      <span className="text-theme-grey-900 font-bold text-xs">
        0 of {subtasks} subtasks
      </span>
    </motion.div>
  );
};
