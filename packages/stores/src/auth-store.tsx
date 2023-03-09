import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as TYPES from "types";

export const useAuthStore = create<TYPES.IAuth>()(
  persist(
    (set, get) => ({
      modalOpened: false,
      handleOpenModal: () => {
        set({
          modalOpened: !get().modalOpened,
        });
      },
      token: "",
    }),
    {
      name: "auth-storage",
    }
  )
);
