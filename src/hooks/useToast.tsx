import React, { useCallback } from 'react'
import { useSnackbar, SnackbarMessage, OptionsObject, SnackbarKey } from 'notistack'
import { IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'

export type UseToastsReturnValue = {
  showToast: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey
  closeToast: (key?: SnackbarKey) => void
}

export default function useToasts(): UseToastsReturnValue {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const defaultAction = useCallback(
    (key: SnackbarKey) => {
      const onClick = (): void => closeSnackbar(key)

      return (
        <IconButton aria-label="close toast" color="inherit" onClick={onClick}>
          <Close />
        </IconButton>
      )
    },
    [closeSnackbar]
  )

  const showToast = useCallback(
    (message: SnackbarMessage, options?: OptionsObject) => {
      return enqueueSnackbar(message, {
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        action: defaultAction,
        ...options
      })
    },
    [defaultAction, enqueueSnackbar]
  )

  return {
    showToast,
    closeToast: closeSnackbar
  }
}
