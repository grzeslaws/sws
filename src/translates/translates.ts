import { en } from "./en";
import { pl } from "./pl";

export const translate = {
    en,
    pl,
    default: en,
}

export type Translate = typeof en;