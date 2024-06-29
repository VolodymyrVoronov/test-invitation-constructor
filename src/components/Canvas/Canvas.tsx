import { useToJpeg, useToPng, useToSvg } from "@hugocxl/react-to-image";
import useMergedRef from "@react-hook/merged-ref";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app";
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

  const [, saveAsPng, pngRef] = useToPng<HTMLDivElement>({
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = `${canvasName}.png`;
      link.href = data;
      link.click();

      const timerId = setTimeout(() => {
        setSaveFormat(null);
        clearTimeout(timerId);
      }, 1000);
    },
  });

  const [, saveAsJpeg, jpegRef] = useToJpeg<HTMLDivElement>({
    quality: 1,
    type: "image/jpeg",
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = `${canvasName}.jpg`;
      link.href = data;
      link.click();

      const timerId = setTimeout(() => {
        setSaveFormat(null);
        clearTimeout(timerId);
      }, 1000);
    },
  });

  const [, convertToSvg, svgRef] = useToSvg<HTMLDivElement>({
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = `${canvasName}.svg`;
      link.href = data;
      link.click();

      const timerId = setTimeout(() => {
        setSaveFormat(null);
        clearTimeout(timerId);
      }, 1000);
    },
  });

  const canvasRef = useMergedRef(pngRef, jpegRef, svgRef);

  useEffect(() => {
    if (saveFormat === "png") {
      saveAsPng();

      return;
    }

    if (saveFormat === "jpeg") {
      saveAsJpeg();

      return;
    }

    if (saveFormat === "svg") {
      convertToSvg();
    }
  }, [saveFormat]);

  return (
    <div
      ref={canvasRef}
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
