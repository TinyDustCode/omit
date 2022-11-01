import {OmitModePaletteTypes, OmitModeTypes} from 'omit-injection';

export interface OmitConfigTypes {
    prefixName: string;
}

export interface OmitThemeTypes {
    palette: OmitModePaletteTypes,
    mode: OmitModeTypes
}

export type OmitConfigThemeTypes = {
    theme:OmitThemeTypes,
    config:OmitConfigTypes
}