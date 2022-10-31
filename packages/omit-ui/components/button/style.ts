import {css, SerializedStyles} from "@emotion/react";
import {OmitConfigThemeTypes} from "../../types/config";
import {OmitRenderPMC} from "../../../omit-injection";

const buttonSize = (prefixName: string) => css({
    [`.${prefixName}_button_small`]: {
        padding: '2px 8px'
    },
    [`.${prefixName}_button_medium`]: {
        padding: '5px 16px'
    },
    [`.${prefixName}_button_large`]: {
        padding: '8px 24px'
    }
})

const primaryButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme
    return css({
        [`.${prefixName}_button_primary`]: {
            background: OmitRenderPMC('primary', mode, palette),
            color: 'white',
            borderColor: OmitRenderPMC('primary', mode, palette),
        }
    })
}

const successButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme
    return css({
        [`.${prefixName}_button_success`]: {
            background: OmitRenderPMC('success', mode, palette),
            color: 'white',
            borderColor: OmitRenderPMC('success', mode, palette),
        }
    })
}

const warningButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme
    return css({
        [`.${prefixName}_button_warning`]: {
            background: OmitRenderPMC('warning', mode, palette),
            color: 'white',
            borderColor: OmitRenderPMC('warning', mode, palette),
        }
    })
}

const dangerButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme
    return css({
        [`.${prefixName}_button_danger`]: {
            background: OmitRenderPMC('danger', mode, palette),
            color: 'white',
            borderColor: OmitRenderPMC('danger', mode, palette),
        }
    })
}


const baseButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}} = configTheme
    return css({
        [`.${prefixName}_button`]: {
            cursor: 'pointer',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius:'3px'
        }
    })
}

export const ButtonStyle = (configTheme: OmitConfigThemeTypes): SerializedStyles => {
    const {config: {prefixName}} = configTheme
    return css`
      ${baseButton(configTheme)}
      ${buttonSize(prefixName)}
      ${primaryButton(configTheme)}
      ${successButton(configTheme)}
      ${warningButton(configTheme)}
      ${dangerButton(configTheme)}
    `
}