import { memo } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ElementColor from "../ElementColor/ElementColor";
import ElementLayer from "../ElementLayer/ElementLayer";
import ElementSettings from "../ElementSettings/ElementSettings";
import TypoAlignment from "../TypoAlignment/TypoAlignment";
import TypoSize from "../TypoSize/TypoSize";
import TypoStyle from "../TypoStyle/TypoStyle";

const ConstructorRight = memo((): JSX.Element => {
  const [selectedCanvasElement] = useAppStore(
    useShallow((state) => [state.selectedCanvasElement]),
  );

  return (
    <div className="grid w-full border-2 border-black dark:border-slate-400">
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

        <AccordionItem value="item-1">
          <AccordionTrigger className="px-2 text-lg font-semibold hover:bg-slate-100 hover:no-underline disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50">
            Layer
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ElementLayer />
          </AccordionContent>
        </AccordionItem>

        {selectedCanvasElement?.type !== "image" &&
        selectedCanvasElement?.type !== "figure" ? (
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-2 text-lg font-semibold hover:bg-slate-100 hover:no-underline disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50">
              Text Settings
            </AccordionTrigger>
            <AccordionContent className="space-y-4 px-2">
              <TypoStyle />
              <TypoSize />
              <TypoAlignment />
            </AccordionContent>
          </AccordionItem>
        ) : null}

        {selectedCanvasElement?.type !== "image" ? (
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger className="px-2 text-lg font-semibold hover:bg-slate-100 hover:no-underline disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50">
              Color
            </AccordionTrigger>
            <AccordionContent className="px-2">
              <ElementColor />
            </AccordionContent>
          </AccordionItem>
        ) : null}
      </Accordion>
    </div>
  );
});

export default ConstructorRight;
