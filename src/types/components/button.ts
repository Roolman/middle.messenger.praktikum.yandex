import { ComponentProps } from "./component";

export interface ButtonClass {
    [key: string]: string
}

export type ButtonProps = ComponentProps & {
    title?: string
    type?: string
    theme?: string
    iconClass?: string
}