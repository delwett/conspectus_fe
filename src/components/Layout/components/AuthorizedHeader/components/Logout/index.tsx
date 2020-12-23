import React, { ReactElement, useCallback } from 'react'
import { IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { graphql, useMutation } from 'relay-hooks'
import type { LogoutMutation } from '@/__generated__/LogoutMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import { deleteToken, getToken } from '@/utils/auth-tokens'
import useToasts from '@/hooks/useToast'
import useActiveUser from '@/hooks/useActiveUser'

export default function Logout(): ReactElement {
  const [logout, { loading }] = useMutation<LogoutMutation>(logoutMutation)
  const { showToast } = useToasts()
  const { activeUser } = useActiveUser()
  const userId = activeUser?.id

  const handleClick = useCallback(async () => {
    if (!getToken()) return

    await logout({
      variables: {},
      onError: error => {
        showToast(asErrorMessage(error), { variant: 'error' })
      },
      onCompleted: () => {
        deleteToken()
      },
      updater: store => {
        if (userId) store.delete(userId)
      }
    })
  }, [logout, showToast, userId])

  return (
    <IconButton aria-label="logout" color="inherit" disabled={loading} onClick={handleClick}>
      <Close />
    </IconButton>
  )
}

const logoutMutation = graphql`
  mutation LogoutMutation {
    logout
  }
`
