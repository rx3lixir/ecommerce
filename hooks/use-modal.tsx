import { create } from "zustand";

interface useStotreModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useStotreModal = create<useStotreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose() {
    set({ isOpen: false });
  },
}));
