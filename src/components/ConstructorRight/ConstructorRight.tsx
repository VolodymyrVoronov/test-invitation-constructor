import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ElementColor from "../ElementColor/ElementColor";
import ElementSettings from "../ElementSettings/ElementSettings";

const ConstructorRight = (): JSX.Element => {
  const [selectedCanvasElement] = useAppStore(
    useShallow((state) => [state.selectedCanvasElement]),
  );

  return (
    <div className="grid w-full">
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={["item-1", "item-2", "item-3"]}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-2 text-lg font-semibold hover:bg-slate-100 hover:no-underline disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50">
            Position
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ElementSettings />
          </AccordionContent>
        </AccordionItem>

        {selectedCanvasElement?.type === "text" ? (
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-2 text-lg font-semibold hover:bg-slate-100 hover:no-underline disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50">
              Text Settings
            </AccordionTrigger>
            <AccordionContent className="px-2">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
        ) : null}

        <AccordionItem value="item-3">
          <AccordionTrigger className="px-2 text-lg font-semibold hover:bg-slate-100 hover:no-underline disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50">
            Color
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ElementColor />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ConstructorRight;
