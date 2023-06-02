"use client";

import { useSidebarStore } from "@/store/useSidebarStore";
import { EyeIcon } from "@heroicons/react/24/solid";

export const OpenSidebar = () => {
  const [setSidebarOpen, isSidebarOpen] = useSidebarStore(
    ({ setSidebarOpen, isSidebarOpen }) => [setSidebarOpen, isSidebarOpen]
  );

  return (
    <div
      onClick={() => setSidebarOpen(!isSidebarOpen)}
      className="bg-theme-purple-200 absolute bottom-6 left-0 p-4 px-5 rounded-r-full cursor-pointer"
    >
      <EyeIcon className="text-white w-5 h-5" />
    </div>
  );
};
