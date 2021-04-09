import { Padding } from "src/lib/types/padding";
import { calculateSize } from "./sizing";

export function calculatePadding({ padding, paddingLeftRight, paddingTopBottom }: Padding){
  const paddingTopBottomStyle = paddingTopBottom && calculateSize(paddingTopBottom);
  const paddingLeftRightStyle = paddingLeftRight && calculateSize(paddingLeftRight);
  if (paddingLeftRight || paddingTopBottom) {
    return `${paddingTopBottomStyle || calculateSize(padding)} ${paddingLeftRightStyle || calculateSize(padding)}`;
  }
  return calculateSize(padding);
}