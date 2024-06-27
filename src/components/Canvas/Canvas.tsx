import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

const Canvas = (): JSX.Element => {
  const [canvasSize, canvasBackgroundColor] = useAppStore(
    useShallow((state) => [state.canvasSize, state.canvasBackgroundColor]),
  );

  return (
    <div
      className="w-full border-2 border-dashed border-black dark:border-slate-400"
      style={{
        height: `${canvasSize[0]}px`,
        width: `${canvasSize[1]}px`,
        background: canvasBackgroundColor as string,
      }}
    >
      Canvas
    </div>
  );
};

export default Canvas;
