import { useEffect } from "react";

function useCanvasClick<T extends HTMLElement>(
  ref: React.RefObject<T>,
  dataAttribute: string,
  cb: () => void,
) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current) {
        const targetElement = e.target as HTMLElement;
        const elementWithCanvasDataAttribute =
          targetElement.getAttribute(dataAttribute);

        if (elementWithCanvasDataAttribute) {
          cb();
        }
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [cb, dataAttribute, ref]);
}

export default useCanvasClick;
