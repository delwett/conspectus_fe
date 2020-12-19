import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { blue, deepPurple } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue['800']
    },
    secondary: {
      main: deepPurple['500']
    },
    background: {
      default: '#fffff'
    }
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    htmlFontSize: 10,
    fontSize: 16
  }
})

export const breakpoints = theme.breakpoints

export default responsiveFontSizes(theme)
