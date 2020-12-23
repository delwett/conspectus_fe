import { styled } from '@linaria/react'
import { Modal, Paper, IconButton as IconButtonBase } from '@material-ui/core'
import { breakpoints } from '@/theme'

export const ModalBase = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Body = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px;

  ${breakpoints.up('sm')} {
    max-width: 70%;
  }
`

export const IconButton = styled(IconButtonBase)`
  position: absolute;
  top: 0;
  right: 0;
`
