import { Padding } from "src/lib/types/padding";
import { Stack } from "src/lib/types/stack";
import { calculatePadding } from "../utils/padding";
import { calculateSize } from "../utils/sizing";

export function getPaddingStyling(props: Padding) {
    return {
        padding: calculatePadding(props)
    }
}

export function getStackStyling(props: Stack) {
    return {
        marginBottom: calculateSize(props.stack)
    }
}
