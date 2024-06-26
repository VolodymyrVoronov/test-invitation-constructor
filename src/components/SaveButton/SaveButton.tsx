import { Save } from "lucide-react";
import { memo } from "react";

import { SaveFormat } from "@/types";

import { Menu, MenuItem, MenuPopover, MenuTrigger } from "@/components/ui/menu";
import { Button } from "../ui/button";

const SaveButton = memo((): JSX.Element => {
  const onSaveButtonClick = (saveAs: SaveFormat): void => {
    console.log(saveAs);
  };

  return (
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
          <MenuItem id="pdf" onAction={() => onSaveButtonClick("pdf")}>
            PDF
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
  );
});

export default SaveButton;
