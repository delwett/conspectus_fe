import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RelayEnvironmentProvider } from 'relay-hooks'
import { SnackbarProvider } from 'notistack'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { makeStyles, StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import environment from '@/api/environment'
import ActiveUserProvider from '@/containers/ActiveUserProvider'
import RootScene from '@/scenes'
import theme from '@/theme'

export const useSnackbarStyles = makeStyles({
  root: {
    top: 55
  }
})

export default function App(): ReactElement {
  const snackbarStyles = useSnackbarStyles()

  return (
    <BrowserRouter>
      <RelayEnvironmentProvider environment={environment}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <SnackbarProvider classes={snackbarStyles} maxSnack={4}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ActiveUserProvider>
                  <RootScene />
                </ActiveUserProvider>
              </MuiPickersUtilsProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </StylesProvider>
      </RelayEnvironmentProvider>
    </BrowserRouter>
  )
}
