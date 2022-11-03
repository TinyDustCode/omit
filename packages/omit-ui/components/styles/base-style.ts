import {css, SerializedStyles} from '@emotion/react'
import {OmitGlobalConfig} from "../../types/provider";

/**
 * @description  rest.css
 * @param
 * @return {*}
*/
export const creatBaseStyle = (_: OmitGlobalConfig):SerializedStyles => {
    return css`
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }

      /* HTML5 display-role reset for older browsers */

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      body {
        line-height: 1;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote::before,
      blockquote::after,
      q::before,
      q::after {
        content: '';
        content: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      html {
        box-sizing: border-box;
        overflow-x: hidden;

        [type='button'] {
          appearance: none;
        }
      }

      body {
      }
      html,
      body,
      input,
      select,
      optgroup,
      textarea,
      button {
        font-feature-settings: 'kern';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }

      pre,
      code {
      }
    `
}