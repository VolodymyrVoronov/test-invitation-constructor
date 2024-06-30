import { useCallback, useEffect, useRef } from "react";
import { useShallow } from "zustand/react/shallow";

import useCanvasClick from "@/hooks/useCanvasClick";
import downloadImage from "@/lib/downloadImage";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app";
import { SaveFormat } from "@/types";

import Elements from "../Elements/Elements";
import Images from "../Images/Images";

const Canvas = (): JSX.Element => {
  const [
    canvasName,
    canvasSize,
    canvasBackgroundColor,
    saveFormat,
    canvasElements,
    setSaveFormat,
    setSelectedCanvasElement,
  ] = useAppStore(
    useShallow((state) => [
      state.canvasName,
      state.canvasSize,
      state.canvasBackgroundColor,
      state.saveFormat,
      state.canvasElements,
      state.setSaveFormat,
      state.setSelectedCanvasElement,
    ]),
  );

  const canvasRef = useRef<HTMLDivElement>(null);

  useCanvasClick(canvasRef, "data-canvas-id", () =>
    setSelectedCanvasElement(null),
  );

  const downloadImageHandler = useCallback(
    async (saveFormat: SaveFormat): Promise<void> => {
      await downloadImage("print-canvas", canvasName, saveFormat);

      const timerId = setTimeout(() => {
        setSaveFormat(null);
        clearTimeout(timerId);
      }, 1000);
    },
    [canvasName, setSaveFormat],
  );

  useEffect(() => {
    if (saveFormat === "png") {
      downloadImageHandler("png");

      return;
    }

    if (saveFormat === "jpeg") {
      downloadImageHandler("jpeg");
    }
  }, [downloadImageHandler, saveFormat]);

  const elements = canvasElements.filter(
    (canvasElement) => canvasElement.type === "figure",
  );

  const images = canvasElements.filter(
    (canvasElement) => canvasElement.type === "image",
  );

  return (
    <div
      ref={canvasRef}
      id="print-canvas"
      data-canvas-id
      className={cn(
        "w-full outline-dashed outline-2 outline-black dark:outline-slate-400",
        {
          "outline-none": saveFormat !== null,
        },
      )}
      style={{
        height: `${canvasSize[0]}px`,
        width: `${canvasSize[1]}px`,
        marginLeft: "0",
        marginRight: "0",
        background: canvasBackgroundColor as string,
      }}
    >
      {elements.map((canvasElement) => (
        <Elements key={canvasElement.id} canvasElement={canvasElement} />
      ))}

      {images.map((canvasImage) => (
        <Images key={canvasImage.id} canvasElement={canvasImage} />
      ))}
    </div>
  );
};

export default Canvas;
