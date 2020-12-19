import { styled } from '@linaria/react'
import { Container as ContainerBase, Card as CardBase, Typography as TypographyBase } from '@material-ui/core'

export const Container = styled(ContainerBase)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled(CardBase)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
`
export const Typography = styled(TypographyBase)`
  align-self: center;
`
