import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

const Canvas = (): JSX.Element => {
  const [canvasSize, canvasBackgroundColor] = useAppStore(
    useShallow((state) => [state.canvasSize, state.canvasBackgroundColor]),
  );

  return (
    <div
      className="w-full border-2 border-dashed border-black"
      style={{
        height: `${canvasSize[0]}px`,
        width: `${canvasSize[1]}px`,
        backgroundColor: canvasBackgroundColor,
      }}
    >
      Canvas
    </div>
  );
};

export default Canvas;
