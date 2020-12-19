import React, { ReactElement, ReactNode } from 'react'
import Header from './components/Header'
import { Container, Body } from './styles'

type LayoutProps = {
  isAuthorized: boolean
  children: ReactNode
}

export default function Layout(props: LayoutProps): ReactElement {
  const { children, isAuthorized } = props

  return (
    <Container>
      {isAuthorized ? null : <Header />}
      <Body>{children}</Body>
    </Container>
  )
}
