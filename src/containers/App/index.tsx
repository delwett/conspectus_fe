import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import RootScene from '@/scenes'
import theme from '@/theme'

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={4}>
            <RootScene />
          </SnackbarProvider>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  )
}
