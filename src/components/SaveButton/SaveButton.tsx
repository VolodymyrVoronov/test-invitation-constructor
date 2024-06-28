import { Save } from "lucide-react";
import { memo } from "react";
import { Text } from "react-aria-components";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";
import { SaveFormat } from "@/types";

import { Menu, MenuItem, MenuPopover, MenuTrigger } from "@/components/ui/menu";
import { Button } from "../ui/button";

const SaveButton = memo((): JSX.Element => {
  const [setSaveFormat] = useAppStore(
    useShallow((state) => [state.setSaveFormat]),
  );

  const onSaveButtonClick = (saveAs: SaveFormat): void => {
    setSaveFormat(saveAs);
  };

  return (
    <div className="grid w-full justify-items-center gap-1">
      <MenuTrigger>
        <Button
          aria-label="Save"
          className="w-full"
          variant="outline"
          type="button"
        >
          <Save className="mr-2 size-5" />
          Save as
          <span className="sr-only">Save as</span>
        </Button>
        <MenuPopover className="min-w-[10rem]">
          <Menu>
            <MenuItem id="svg" onAction={() => onSaveButtonClick("svg")}>
              SVG
            </MenuItem>
            <MenuItem id="png" onAction={() => onSaveButtonClick("png")}>
              PNG
            </MenuItem>
            <MenuItem id="jpeg" onAction={() => onSaveButtonClick("jpeg")}>
              JPEG
            </MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>

      <Text
        slot="description"
        className="text-center text-sm uppercase text-muted-foreground"
      >
        svg | png | jpeg
      </Text>
    </div>
  );
});

export default SaveButton;
