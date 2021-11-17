import { Indexed } from "../types"

export enum BUTTON_TYPES {
    BASIC = "BASIC",
    STROKED = "STROKED",
    LINK = "LINK",
    ROUND = "ROUND",
}

export enum BUTTON_THEMES {
    PRIMARY = "PRIMARY",
    DANGER = "DANGER",
    NORMAL = "NORMAL"
}

export const BUTTON_TYPE_CLASS: Indexed = {
    [BUTTON_TYPES.BASIC]: "button_basic",
    [BUTTON_TYPES.STROKED]: "button_stroked",
    [BUTTON_TYPES.LINK]: "button_link",
    [BUTTON_TYPES.ROUND]: "button_round",
}

export const BUTTON_THEME_CLASS: Indexed = {
    [BUTTON_THEMES.PRIMARY]: "button_primary",
    [BUTTON_THEMES.DANGER]: "button_danger",
    [BUTTON_THEMES.NORMAL]: "button_normal",
}