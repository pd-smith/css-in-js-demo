import { ReactNode } from "react";
import { Padding } from "./padding";
import { Stack } from './stack';

export interface ContainerProps extends Padding, Stack {
    children: ReactNode
}