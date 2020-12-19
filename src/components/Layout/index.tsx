import React, { ReactElement, ReactNode } from 'react'
import Header from './components/Header'
import AuthorizedHeader from './components/AuthorizedHeader'
import { Container, Body } from './styles'

type LayoutProps = {
  isAuthorized: boolean
  children: ReactNode
}

export default function Layout(props: LayoutProps): ReactElement {
  const { children, isAuthorized } = props

  return (
    <Container>
      {isAuthorized ? <AuthorizedHeader /> : <Header />}
      <Body>{children}</Body>
    </Container>
  )
}
