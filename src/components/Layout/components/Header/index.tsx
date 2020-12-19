import React, { ReactElement } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Title } from './styles'

export default function Header(): ReactElement {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Title variant="h5" noWrap>
          Conspectus
        </Title>
      </Toolbar>
    </AppBar>
  )
}
