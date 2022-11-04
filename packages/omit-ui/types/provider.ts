import {
  OmitFontPaletteTypes,
  OmitFontSizeTypes,
  OmitIndexTypes,
  OmitModePaletteTypes,
  OmitThemeModeTypes,
  OmitRadiusTypes,
  OmitSpacePointTypes,
} from 'omit-injection';

export interface OmitConfigTypes {
  prefixName: string;
  themeMode: OmitThemeModeTypes;
  index: OmitIndexTypes;
  spacePoint: OmitSpacePointTypes;
  fontSize: OmitFontSizeTypes;
  radius: OmitRadiusTypes;
}

export interface OmitThemeTypes {
  themePalette: OmitModePaletteTypes;
  fontPalette: OmitFontPaletteTypes;
}

export interface OmitGlobalConfig {
  theme: OmitThemeTypes;
  config: OmitConfigTypes;
}
