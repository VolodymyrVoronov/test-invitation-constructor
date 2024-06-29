import { CSSProperties } from "react";
import { temporal } from "zundo";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { CanvasElement, SaveFormat, SelectedElement } from "@/types";

import generateRandomUUID from "@/helpers/generateRandomUUID";
import { Color } from "react-aria-components";

export interface IAppStore {
  canvasName: string;
  canvasSize: [number, number];
  canvasBackgroundColor: string | Color;
  canvasElements: CanvasElement[];
  selectedCanvasElement: SelectedElement | null;
  saveFormat: SaveFormat | null;
}

export interface IAppActions {
  setCanvasName: (canvasName: string) => void;
  setCanvasSize: (size: [number, number]) => void;
  setCanvasBackgroundColor: (color: string | Color) => void;
  setCanvasElement: (element: CanvasElement) => void;
  updateCanvasElementCSS: (id: string, css: CSSProperties) => void;
  updateCanvasElementContent: (id: string, content: string) => void;
  setSelectedCanvasElement: (element: SelectedElement | null) => void;
  setSaveFormat: (format: SaveFormat | null) => void;
  clearCanvas: () => void;
}

export const useAppStore = create(
  temporal(
    devtools(
      immer<IAppStore & IAppActions>((set, get) => ({
        canvasName: "my-invitation",
        canvasSize: [1024, 768],
        canvasBackgroundColor: "#ffffff",
        canvasElements: [],
        selectedCanvasElement: null,
        saveFormat: null,

        setCanvasName: (canvasName: string) => {
          set({ canvasName });
        },

        setCanvasSize: (size: [number, number]) => {
          set({ canvasSize: size });
        },

        setCanvasBackgroundColor: (color: string | Color) => {
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

        setSelectedCanvasElement: (element: SelectedElement | null) => {
          set({ selectedCanvasElement: element });
        },

        setSaveFormat: (format: SaveFormat | null) => {
          set({ saveFormat: format });
        },

        clearCanvas: () => {
          set({
            canvasName: "my-invitation",
            canvasSize: [1024, 768],
            canvasBackgroundColor: "#ffffff",
            canvasElements: [],
            selectedCanvasElement: null,
            saveFormat: null,
          });
        },
      })),
      { limit: 50 },
    ),
  ),
);
