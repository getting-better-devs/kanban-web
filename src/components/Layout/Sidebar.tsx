"use client";

import { useState } from "react";

import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

export const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  if (!isSidebarOpen) {
    return (
      <div
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="bg-theme-purple-200 absolute bottom-6 left-0 p-4 px-5 rounded-r-full cursor-pointer"
      >
        <EyeIcon className="text-white w-5 h-5" />
      </div>
    );
  }

  return (
    <aside className="bg-theme-dark-700 border-r-2 border-theme-dark-500 flex flex-col gap-6 items-center h-screen w-1/5 relative top-0 left-0">
      <h1 className="text-2xl font-bold">Sidebar</h1>

      <div
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="mt-auto mr-auto flex items-center gap-2 text-theme-grey-900 cursor-pointer pl-8 pb-8"
      >
        <EyeSlashIcon className="w-4 h-4 text-theme-grey-900" />
        <span className="text-sm">Hide Sidebar</span>
      </div>
    </aside>
  );
};
