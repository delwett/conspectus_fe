import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
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
    htmlFontSize: 10
  }
})

export default responsiveFontSizes(theme)
