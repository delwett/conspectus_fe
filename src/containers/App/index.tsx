import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import RootScene from '@/scenes'
import theme from '@/theme'

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RootScene />
      </ThemeProvider>
    </BrowserRouter>
  )
}
