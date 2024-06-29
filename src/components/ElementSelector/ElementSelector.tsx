import { useShallow } from "zustand/react/shallow";

import FIGURES from "@/constants/figures";
import { useAppStore } from "@/store/app";

import { Button } from "../ui/button";

const ElementSelector = (): JSX.Element => {
  const [setCanvasElement] = useAppStore(
    useShallow((state) => [state.setCanvasElement]),
  );

  const onElementClick = (element: JSX.Element): void => {
    setCanvasElement({
      type: "figure",
      content: element,
      css: {
        zIndex: 1,
        color: "#000000",
      },
    });
  };

  return (
    <div className="grid w-full grid-cols-1 gap-3">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(30px,1fr))] gap-2">
        {FIGURES.map((figure) => (
          <Button
            key={figure.id}
            type="button"
            variant="outline"
            size="icon"
            className={"h-8 w-8 opacity-90 hover:opacity-100"}
            onPress={() => {
              onElementClick(figure.shape);
            }}
            aria-label={figure.description}
          >
            {figure.shape}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ElementSelector;
