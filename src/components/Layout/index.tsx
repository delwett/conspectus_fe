import React, { ReactElement, ReactNode } from 'react'
import { Container } from './styles'

type LayoutProps = {
  children: ReactNode
}

export default function Layout(props: LayoutProps): ReactElement {
  const { children } = props

  return <Container>{children}</Container>
}
