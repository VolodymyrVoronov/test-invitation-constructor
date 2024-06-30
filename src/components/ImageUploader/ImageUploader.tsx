import { Image } from "lucide-react";
import { FileDropItem, FileTrigger, Text } from "react-aria-components";
import { useShallow } from "zustand/react/shallow";

import convertToBase64 from "@/lib/convertToBase64";
import { useAppStore } from "@/store/app";

import { Button } from "@/components/ui/button";
import { DropZone } from "@/components/ui/dropzone";

const ImageUploader = (): JSX.Element => {
  const [setCanvasElement] = useAppStore(
    useShallow((state) => [state.setCanvasElement]),
  );

  const onImageUploadChange = (element: string): void => {
    setCanvasElement({
      type: "image",
      content: element,
      css: {
        zIndex: 1,
      },
    });
  };

  return (
    <div>
      <DropZone
        onDrop={async (e) => {
          try {
            const files = e.items.filter(
              (file) => file.kind === "file",
            ) as FileDropItem[];

            const file = await files[0].getFile();
            const base64 = (await convertToBase64(file)) as string;

            if (base64) {
              onImageUploadChange(base64);
            }
          } catch (error) {
            console.error(error);
          }
        }}
        className="w-full"
      >
        <FileTrigger
          onSelect={async (files) => {
            try {
              if (files) {
                const file = files[0];
                const base64 = (await convertToBase64(file)) as string;

                if (base64) {
                  onImageUploadChange(base64);
                }
              }
            } catch (error) {
              console.error(error);
            }
          }}
          acceptedFileTypes={[".jpeg", ".jpg", ".png"]}
        >
          <Button variant="outline">
            <Image className="mr-2 size-5" />
            Select image
          </Button>
        </FileTrigger>

        <Text slot="label" style={{ display: "block" }}>
          Drop your image here
        </Text>
      </DropZone>
    </div>
  );
};

export default ImageUploader;
