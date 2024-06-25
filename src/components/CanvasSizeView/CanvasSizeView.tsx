import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

const CanvasSizeView = (): JSX.Element => {
  const [canvasSize] = useAppStore(useShallow((state) => [state.canvasSize]));
  return (
    <div>
      {canvasSize[0]} x {canvasSize[1]} px
    </div>
  );
};

export default CanvasSizeView;
