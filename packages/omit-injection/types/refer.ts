import {OmitPaletteTypes} from "./palette";

export type PaletteModeReferTypes = Record<OmitPaletteTypes, { light: string, dark: string }>

type InteractionTypes = {
    hover: string;
    active: string;
    disabled: string;
}

export type PaletteInteractionReferTypes = Record<OmitPaletteTypes, {
    light: InteractionTypes;
    dark: InteractionTypes;
}>