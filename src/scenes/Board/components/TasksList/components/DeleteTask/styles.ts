import { styled } from '@linaria/react'
import { IconButton as IconButtonBase } from '@material-ui/core'

export const IconButton = styled(IconButtonBase)`
  &:disabled {
    opacity: 0.3;
  }
`
