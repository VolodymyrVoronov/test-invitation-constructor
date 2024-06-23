import { CSSProperties } from "react";
import { temporal } from "zundo";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { CanvasElement } from "@/types";

import generateRandomUUID from "@/helpers/generateRandomUUID";

export interface IAppStore {
  canvasElements: CanvasElement[];
  selectedCanvasElementId: string;
}

export interface IAppActions {
  setCanvasElement: (element: CanvasElement) => void;
  updateCanvasElementCSS: (id: string, css: CSSProperties) => void;
  updateCanvasElementContent: (id: string, content: string) => void;
  setSelectedCanvasElementId: (id: string) => void;
}

export const useAppStore = create(
  temporal(
    immer<IAppStore & IAppActions>((set, get) => ({
      canvasElements: [],
      selectedCanvasElementId: "",

      setCanvasElement: (element: CanvasElement) => {
        const newCanvasElement: CanvasElement = {
          id: generateRandomUUID(),
          selected: false,
          ...element,
        };

        set((state) => {
          state.canvasElements.push(newCanvasElement);
        });
      },

      updateCanvasElementCSS: (id: string, css: CSSProperties) => {
        set((state) => {
          const index = state.canvasElements.findIndex(
            (element) => element.id === id,
          );

          state.canvasElements[index].css = css;
        });
      },

      updateCanvasElementContent: (id: string, content: string) => {
        set((state) => {
          const index = state.canvasElements.findIndex(
            (element) => element.id === id,
          );

          state.canvasElements[index].content = content;
        });
      },

      setSelectedCanvasElementId: (id: string) => {
        set({ selectedCanvasElementId: id });
      },
    })),
    { limit: 50 },
  ),
);
