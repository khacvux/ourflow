import { createStore } from "zustand";
import { persist } from "zustand/middleware";
import * as TYPES from "types";

export const useAuthStore = createStore<TYPES.IAuth>()(
  persist((set, get) => ({}), {
    name: "auth-storage",
  })
);
