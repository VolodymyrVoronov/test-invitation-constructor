import { useSize } from "ahooks";
import { useEffect, useRef } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import Canvas from "../Canvas/Canvas";
import CanvasSettings from "../CanvasSettings/CanvasSettings";
import CanvasSizeView from "../CanvasSizeView/CanvasSizeView";
import ConstructorLeft from "../ConstructorLeft/ConstructorLeft";
import Nav from "../Nav/Nav";

const ConstructorLayout = (): JSX.Element => {
  const [canvasSize, setCanvasSize] = useAppStore(
    useShallow((state) => [state.canvasSize, state.setCanvasSize]),
  );

  const ref = useRef(null);
  const size = useSize(ref);

  useEffect(() => {
    if (size && canvasSize[1] > size.width) {
      setCanvasSize([canvasSize[0], size.width]);
    }
  }, [canvasSize, setCanvasSize, size]);

  return (
    <div className="grid w-auto grid-cols-1 gap-2 p-2">
      <Nav />

      <main className="grid w-auto grid-cols-2 grid-rows-[auto_1fr] gap-2 lg:grid-cols-[200px_1fr_200px] lg:grid-rows-1 xl:grid-cols-[300px_1fr_300px]">
        <section className="lg:col-span-200px col-span-2 row-start-1 sm:col-span-1">
          <ConstructorLeft />
        </section>

        <section
          ref={ref}
          className="col-span-2 flex w-full flex-col items-center gap-5 border-2 border-black p-2 dark:border-slate-400 lg:col-span-1 lg:row-start-1"
        >
          <CanvasSettings />
          <CanvasSizeView />
          <Canvas />
        </section>

        <section className="lg:col-span-200px col-span-2 row-start-2 sm:col-span-1 sm:row-start-1 lg:row-start-1">
          <div>3</div>
        </section>
      </main>
    </div>
  );
};

export default ConstructorLayout;
