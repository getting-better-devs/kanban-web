"use client";

import { motion } from "framer-motion";

import { TaskComponent } from "./types";

export const Task = ({ description, subtasks, index }: TaskComponent) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        type: "spring",
        delay: index * 0.2,
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
