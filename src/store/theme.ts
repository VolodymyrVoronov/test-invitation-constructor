import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Theme } from "@/types";

import applyTheme from "@/helpers/applyTheme";

const initializeTheme = (): Theme => {
  const theme = (localStorage.getItem("theme") as Theme) || "system";

  applyTheme(theme);

  return theme;
};

export interface IThemeStore {
  theme: Theme;
}

export interface IThemeActions {
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create(
  immer<IThemeStore & IThemeActions>((set) => ({
    theme: initializeTheme(),

    setTheme: (theme: Theme) => {
      localStorage.setItem("theme", theme);

      applyTheme(theme);

      set({ theme });
    },
  }))
);
