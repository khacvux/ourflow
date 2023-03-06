import create from "zustand";
import { persist } from "zustand/middleware";
import * as TYPES from "types";


export const useAppearanceStore = create<TYPES.IAppearanceStore>()(
  persist(
    (set, get) => ({
      small: false,
      setSmall: () => {
        set({
          small: !get().small,
        });
      },
    }),
    {
      name: "appearance-storage",
    }
  )
);
