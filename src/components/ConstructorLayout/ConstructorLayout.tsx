import { useSize } from "ahooks";
import { lazy, Suspense, useEffect, useRef } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import Spinner from "../Spinner/Spinner";

const Canvas = lazy(() => import("../Canvas/Canvas"));
const CanvasSettings = lazy(() => import("../CanvasSettings/CanvasSettings"));
const CanvasSizeView = lazy(() => import("../CanvasSizeView/CanvasSizeView"));
const ConstructorLeft = lazy(
  () => import("../ConstructorLeft/ConstructorLeft"),
);
const ConstructorRight = lazy(
  () => import("../ConstructorRight/ConstructorRight"),
);
const Nav = lazy(() => import("../Nav/Nav"));

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
      <Suspense fallback={<Spinner className="h-screen" />}>
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
            <ConstructorRight />
          </section>
        </main>
      </Suspense>
    </div>
  );
};

export default ConstructorLayout;
