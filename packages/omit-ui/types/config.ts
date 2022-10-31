import {OmitPaletteModeTypes, OmitPaletteTypes} from '../../omit-injection';

export interface OmitConfigTypes {
    prefixName: string;
}

export interface OmitThemeTypes {
    palette: OmitPaletteTypes,
    mode: OmitPaletteModeTypes
}

export type OmitConfigThemeTypes = {
    theme:OmitThemeTypes,
    config:OmitConfigTypes
}