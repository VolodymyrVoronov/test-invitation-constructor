import { CSSProperties } from "react";

export type Theme = "light" | "dark" | "system";

export type CanvasElementType = "image" | "figure" | "text";

export type CanvasElement = {
  id?: string;
  type: CanvasElementType;
  css?: CSSProperties;
  selected?: boolean;
  content?: string | JSX.Element;
};

export type SaveFormat = "svg" | "png" | "jpeg";

export type SelectedElement = {
  id: string;
  type: CanvasElementType;
};
