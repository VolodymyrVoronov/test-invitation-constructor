import { SaveFormat } from "@/types";
import html2canvas from "html2canvas";

const downloadImage = async (
  elementId: string,
  fileName: string,
  format: SaveFormat,
): Promise<void> => {
  if (!elementId) return;

  const element = document.getElementById(elementId) as HTMLCanvasElement;
  const canvas = await html2canvas(element, {
    scale: 1,
  });

  const data = canvas.toDataURL(`image/${format}`);
  const link = document.createElement("a");

  link.href = data;
  link.download = `${fileName}.${format}`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloadImage;
