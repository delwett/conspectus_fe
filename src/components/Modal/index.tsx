import React, { ReactElement, ReactNode } from 'react'
import { ModalProps as ModalPropsBase, Fade, Backdrop } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { ModalBase, Body, IconButton } from './styles'

interface ModalProps extends Omit<ModalPropsBase, 'children' | 'open'> {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export default function Modal(props: ModalProps): ReactElement {
  const { children, isOpen, onClose, ...rest } = props

  return (
    <ModalBase
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
      {...rest}
    >
      <Fade in={isOpen}>
        <Body>
          <IconButton size="small" onClick={onClose}>
            <Close />
          </IconButton>
          {children}
        </Body>
      </Fade>
    </ModalBase>
  )
}
