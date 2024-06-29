import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import downloadImage from "@/lib/downloadImage";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app";
import { SaveFormat } from "@/types";

import Elements from "../Elements/Elements";

const Canvas = (): JSX.Element => {
  const [
    canvasName,
    canvasSize,
    canvasBackgroundColor,
    saveFormat,
    canvasElements,
    setSaveFormat,
  ] = useAppStore(
    useShallow((state) => [
      state.canvasName,
      state.canvasSize,
      state.canvasBackgroundColor,
      state.saveFormat,
      state.canvasElements,
      state.setSaveFormat,
    ]),
  );

  const downloadImageHandler = async (): Promise<void> => {
    await downloadImage("print-canvas", canvasName, saveFormat as SaveFormat);

    const timerId = setTimeout(() => {
      setSaveFormat(null);
      clearTimeout(timerId);
    }, 1000);
  };

  useEffect(() => {
    if (saveFormat === "png") {
      downloadImageHandler();

      return;
    }

    if (saveFormat === "jpeg") {
      downloadImageHandler();
    }
  }, [saveFormat]);

  return (
    <div
      id="print-canvas"
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
      TEst
      {canvasElements.map((canvasElement) => {
        if (canvasElement.type === "figure") {
          return (
            <Elements key={canvasElement.id} canvasElement={canvasElement} />
          );
        }
      })}
    </div>
  );
};

export default Canvas;
