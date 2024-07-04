import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Key } from "react-aria-components";
import { FONTS } from "@/constants";

const TypoFontFamily = (): JSX.Element => {
  const [canvasElements, selectedCanvasElement, updateCanvasElementCSS] =
    useAppStore(
      useShallow((state) => [
        state.canvasElements,
        state.selectedCanvasElement,
        state.updateCanvasElementCSS,
      ]),
    );

  const selectedElement = canvasElements.filter(
    (element) => element.id === selectedCanvasElement?.id,
  )[0];

  const onFontFamilyChange = (font: Key): void => {
    if (selectedCanvasElement?.id && selectedElement?.id) {
      updateCanvasElementCSS(selectedElement.id, {
        fontFamily: font as string,
      });
    }
  };

  const isElementSelected = !selectedCanvasElement?.id;

  const fontFamily = (selectedElement?.css?.fontFamily as string) || "";
  const value = FONTS.filter((font) => font.fontFamily === fontFamily)[0];

  return (
    <div>
      <span>Font</span>
      <div className="mt-2">
        <Select
          placeholder="Font family"
          aria-label="font family"
          isDisabled={isElementSelected}
          onSelectionChange={onFontFamilyChange}
          defaultSelectedKey={value?.fontFamily}
          selectedKey={value?.fontFamily}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>

          <SelectPopover>
            <SelectContent aria-label="Font family">
              {FONTS.map((font) => (
                <SelectItem
                  id={font.fontFamily}
                  textValue={font.name}
                  key={font.id}
                >
                  {font.name}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectPopover>
        </Select>
      </div>
    </div>
  );
};

export default TypoFontFamily;
