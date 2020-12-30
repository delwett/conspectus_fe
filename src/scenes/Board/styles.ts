import { styled } from '@linaria/react'
import { Container as ContainerBase } from '@material-ui/core'
import { breakpoints } from '@/theme'

export const Container = styled(ContainerBase)`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow: hidden;

  ${breakpoints.up('sm')} {
    padding: 24px;
  }
`
