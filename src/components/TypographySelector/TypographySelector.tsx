import { CSSProperties } from "react";
import { useShallow } from "zustand/react/shallow";

import { TYPOGRAPHY } from "@/constants";
import { useAppStore } from "@/store/app";

import { Button } from "../ui/button";

const TypographySelector = (): JSX.Element => {
  const [setCanvasElement] = useAppStore(
    useShallow((state) => [state.setCanvasElement]),
  );

  const onElementClick = (element: string, css: CSSProperties): void => {
    setCanvasElement({
      type: "text",
      content: element,
      css: {
        zIndex: 1,
        color: "#000000",
        fontFamily: "'Montserrat Variable', sans-serif",
        ...css,
      },
    });
  };

  return (
    <div className="grid w-full grid-cols-1 gap-3">
      {TYPOGRAPHY.map((typo) => (
        <Button
          key={typo.id}
          type="button"
          variant="ghost"
          onPress={() => {
            onElementClick(typo.description, typo.css);
          }}
          aria-label={typo.shape}
          className="flex gap-5"
          style={typo.css}
        >
          <span>{typo.shape}</span>
          <span>{typo.description}</span>
        </Button>
      ))}
    </div>
  );
};

export default TypographySelector;
