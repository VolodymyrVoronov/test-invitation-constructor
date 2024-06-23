import { CSSProperties } from "react";

export type Theme = "light" | "dark" | "system";

export type CanvasElement = {
  id?: string;
  css?: CSSProperties;
  content?: string;
};
