import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { blue, deepPurple } from '@material-ui/core/colors'

export const themeBase = createMuiTheme({
  palette: {
    primary: {
      main: blue['800']
    },
    secondary: {
      main: deepPurple['500']
    }
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    htmlFontSize: 10,
    fontSize: 16
  }
})

export const breakpoints = themeBase.breakpoints

export default responsiveFontSizes(themeBase)
