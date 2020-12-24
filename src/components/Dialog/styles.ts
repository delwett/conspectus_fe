import { styled } from '@linaria/react'
import { DialogTitle as DialogTitleBase, IconButton as IconButtonBase } from '@material-ui/core'

export const DialogTitle = styled(DialogTitleBase)`
  display: flex;
  flex-direction: column;
  padding: 8px 8px 8px 24px;

  & > * {
    display: flex;
    align-items: center;
  }
`

export const IconButton = styled(IconButtonBase)`
  margin: 0 0 0 auto;
`
