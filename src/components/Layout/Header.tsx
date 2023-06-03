"use client";

import { useSidebarStore } from "@/store/useSidebarStore";

import { Logo } from "./Logo";

export const Header = () => {
  const openSidebar = useSidebarStore(({ openSidebar }) => openSidebar);

  return (
    <header className="bg-theme-dark-700 border-b-2 border-theme-dark-500 flex items-center h-24">
      {!openSidebar && (
        <div className="px-6 py-8 border-r-2 border-theme-dark-500">
          <Logo />
        </div>
      )}

      <h1 className="text-2xl font-bold ml-6">Platform Launch</h1>
    </header>
  );
};
