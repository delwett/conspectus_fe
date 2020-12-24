import React, { forwardRef, ReactElement, ReactNode, Ref } from 'react'
import type { TransitionProps } from '@material-ui/core/transitions/transition'
import { Dialog as DialogBase, Fade, Backdrop, DialogProps as DialogPropsBase, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { DialogTitle, IconButton } from './styles'

export interface DialogProps extends Omit<DialogPropsBase, 'children' | 'open' | 'title'> {
  title?: ReactNode
  children: ReactNode
  isOpen: boolean
  hideCloseIcon?: boolean
  onClose: () => void
}

export default function Dialog(props: DialogProps): ReactElement {
  const { children, title = null, isOpen, hideCloseIcon = false, onClose, ...rest } = props

  return (
    <DialogBase
      open={isOpen}
      fullWidth
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      TransitionComponent={DefaultTransition}
      BackdropProps={{
        timeout: 500
      }}
      {...rest}
    >
      {title ?? !hideCloseIcon ? (
        <DialogTitle>
          <Typography noWrap variant="h6">
            {title}
          </Typography>
          {hideCloseIcon ? null : (
            <IconButton aria-label="close" size="small" onClick={onClose}>
              <Close />
            </IconButton>
          )}
        </DialogTitle>
      ) : null}
      {isOpen ? children : null}
    </DialogBase>
  )
}

const DefaultTransition = forwardRef(function Transition(
  props: TransitionProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})
