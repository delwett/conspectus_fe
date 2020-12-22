import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RelayEnvironmentProvider } from 'relay-hooks'
import { SnackbarProvider } from 'notistack'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import environment from '@/api/environment'
import ActiveUserProvider from '@/containers/ActiveUserProvider'
import RootScene from '@/scenes'
import theme from '@/theme'

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <RelayEnvironmentProvider environment={environment}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={4}>
              <ActiveUserProvider>
                <RootScene />
              </ActiveUserProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </StylesProvider>
      </RelayEnvironmentProvider>
    </BrowserRouter>
  )
}
