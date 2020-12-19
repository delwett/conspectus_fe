import React, { ReactElement, useCallback } from 'react'
import { IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import useToasts from '@/hooks/useToast'

export default function Logout(): ReactElement {
  const { showToast } = useToasts()

  const handleClick = useCallback(() => {
    showToast('Under development', { variant: 'warning' })
  }, [showToast])

  return (
    <IconButton aria-label="logout" color="inherit" onClick={handleClick}>
      <Close />
    </IconButton>
  )
}
