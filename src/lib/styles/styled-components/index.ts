import { calculateSize } from "../utils/sizing";
import { calculatePadding } from "../utils/padding";
import { Padding } from "src/lib/types/padding";
import { Stack } from "src/lib/types/stack";

export function getPaddingStyling(props: Padding) {
    return `padding: ${calculatePadding(props)};`;
}

export function getStackStyling(props: Stack) {
    return `margin-bottom: ${calculateSize(props.stack)};`;
}
