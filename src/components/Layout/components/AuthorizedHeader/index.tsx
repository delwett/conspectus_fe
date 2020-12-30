import React, { ReactElement } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import Team from './components/Team'
import Profile from './components/Profile'
import Logout from './components/Logout'
import { Title } from './styles'

export default function AuthorizedHeader(): ReactElement {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Title variant="h5" noWrap>
          Conspectus
        </Title>
        <Team />
        <Profile />
        <Logout />
      </Toolbar>
    </AppBar>
  )
}
