import { Trash2 } from "lucide-react";
import { memo, useState } from "react";
import { Text } from "react-aria-components";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const ClearButton = memo((): JSX.Element => {
  const [clearCanvas] = useAppStore(useShallow((state) => [state.clearCanvas]));

  const [hovered, setHovered] = useState(false);

  const onClearButtonMouseEnter = (): void => {
    setHovered(true);
  };

  const onClearButtonMouseLeave = (): void => {
    setHovered(false);
  };

  return (
    <div className="grid justify-items-center gap-1">
      <DialogTrigger>
        <Button
          onHoverStart={onClearButtonMouseEnter}
          onHoverEnd={onClearButtonMouseLeave}
          aria-label="Clear"
          variant={hovered ? "destructive" : "outline"}
          type="button"
          size="icon"
        >
          <Trash2 className="size-5" />
          <span className="sr-only">Clear</span>
        </Button>
        <DialogOverlay>
          <DialogContent role="alertdialog">
            {({ close }) => (
              <>
                <DialogHeader>
                  <DialogTitle className="lg:text-xl">
                    Are you absolutely sure?
                  </DialogTitle>
                </DialogHeader>
                <p className="lg:text-md text-sm text-muted-foreground">
                  This action cannot be undone. This will permanently delete
                  your canvas and all you created.
                </p>
                <DialogFooter>
                  <Button
                    variant="outline"
                    autoFocus
                    onPress={close}
                    className="mt-2 sm:mt-0"
                  >
                    No
                  </Button>

                  <Button
                    variant="destructive"
                    onPress={() => {
                      close();
                      clearCanvas();
                    }}
                  >
                    Yes
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </DialogOverlay>
      </DialogTrigger>

      <Text
        slot="description"
        className="text-sm uppercase text-muted-foreground"
      >
        Clear
      </Text>
    </div>
  );
});

export default ClearButton;
