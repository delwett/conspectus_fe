import { styled } from '@linaria/react'
import { Container as ContainerBase } from '@material-ui/core'
import { breakpoints } from '@/theme'

export const Container = styled(ContainerBase)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;

  ${breakpoints.up('sm')} {
    padding: 24px;
  }
`
