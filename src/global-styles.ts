import { css } from '@linaria/core'
import { normalize } from 'polished'
import { grey } from '@material-ui/core/colors'
import RobotoRegular from '@/fonts/Roboto-Regular.ttf'
import RobotoMedium from '@/fonts/Roboto-Medium.ttf'

const normalizedRules = normalize()

export const globals = css`
  :global() {
    html {
      ${normalizedRules[0]};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: normal;
      background: ${grey['200']};
      font-size: 10px;
      box-sizing: border-box;
    }

    html,
    body,
    #app-root {
      width: 100%;
      height: 100%;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    @font-face {
      font-family: 'Roboto';
      font-style: 'normal';
      font-weight: 400;
      src: url(${RobotoRegular}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto';
      font-style: 'normal';
      font-weight: 600;
      src: url(${RobotoMedium}) format('truetype');
    }
  }
`
