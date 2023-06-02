import { create } from "zustand";

interface SidebarStore {
  isSidebarOpen: boolean;
  setSidebarOpen: (isSidebarOpen: boolean) => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isSidebarOpen: false,
  setSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}));
