import React, { ReactElement } from 'react'
import { DialogActions, Button, DialogContent, DialogContentText } from '@material-ui/core'
import Dialog, { DialogProps } from '@/components/Dialog'

interface ConfirmationDialogProps extends DialogProps {
  confirmText?: string
  isConfirmDisabled?: boolean
  onConfirm?: () => void
}

export default function ConfirmationDialog(props: ConfirmationDialogProps): ReactElement {
  const { children, confirmText = 'Confirm', isConfirmDisabled = false, onClose, onConfirm = onClose, ...rest } = props

  return (
    <Dialog maxWidth="xs" onClose={onClose} {...rest} hideCloseIcon>
      <DialogContent>
        <DialogContentText gutterBottom={false}>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" variant="contained" disabled={isConfirmDisabled} onClick={onConfirm}>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
