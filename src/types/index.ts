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

export type SaveFormat = "pdf" | "png" | "jpeg";
