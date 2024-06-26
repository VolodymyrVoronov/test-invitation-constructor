import { CSSProperties } from "react";

export type Theme = "light" | "dark" | "system";

export type CanvasElement = {
  id?: string;
  css?: CSSProperties;
  selected?: boolean;
  content?: string;
};

export type SaveFormat = "pdf" | "png" | "jpeg";
