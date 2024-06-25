import { CSSProperties } from "react";
import { temporal } from "zundo";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { CanvasElement } from "@/types";

import generateRandomUUID from "@/helpers/generateRandomUUID";

export interface IAppStore {
  canvasName: string;
  canvasSize: [number, number];
  canvasBackgroundColor: string;
  canvasElements: CanvasElement[];
  selectedCanvasElementId: string;
}

export interface IAppActions {
  setCanvasName: (canvasName: string) => void;
  setCanvasSize: (size: [number, number]) => void;
  setCanvasBackgroundColor: (color: string) => void;
  setCanvasElement: (element: CanvasElement) => void;
  updateCanvasElementCSS: (id: string, css: CSSProperties) => void;
  updateCanvasElementContent: (id: string, content: string) => void;
  setSelectedCanvasElementId: (id: string) => void;
}

export const useAppStore = create(
  temporal(
    immer<IAppStore & IAppActions>((set, get) => ({
      canvasName: "my-invitation",
      canvasSize: [1024, 768],
      canvasBackgroundColor: "#ffffff",
      canvasElements: [],
      selectedCanvasElementId: "",

      setCanvasName: (canvasName: string) => {
        set({ canvasName });
      },

      setCanvasSize: (size: [number, number]) => {
        set({ canvasSize: size });
      },

      setCanvasBackgroundColor: (color: string) => {
        set({ canvasBackgroundColor: color });
      },

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
