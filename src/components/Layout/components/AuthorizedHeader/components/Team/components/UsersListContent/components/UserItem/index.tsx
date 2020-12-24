import React, { ReactElement, useCallback, useState } from 'react'
import { useFragment, useMutation, graphql } from 'relay-hooks'
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import type { UserItem_user$key } from '@/__generated__/UserItem_user.graphql'
import type { UserItemDeleteMutation } from '@/__generated__/UserItemDeleteMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import useActiveUser from '@/hooks/useActiveUser'
import ConfirmationDialog from '@/components/ConfirmationDialog'

type UserItemProps = {
  user: UserItem_user$key
}

export default function UserItem(props: UserItemProps): ReactElement {
  const { user } = props

  const [isDialogShown, setDialogVisibiity] = useState(false)

  const { id, firstName, lastName, email } = useFragment(userFragment, user)

  const { showToast } = useToasts()
  const { activeUser } = useActiveUser()
  const [deleteUser, { loading }] = useMutation<UserItemDeleteMutation>(deleteUserMutation)

  const isButtonDisabled = id === activeUser?.id || loading

  const handleDeleteConfirm = useCallback(async () => {
    await deleteUser({
      variables: { input: { id } },
      onError: error => {
        showToast(asErrorMessage(error), { variant: 'error' })
      },
      onCompleted: () => {
        showToast('User has been deleted', { variant: 'success' })
      },
      updater: store => {
        const root = store.getRoot()
        const updated = (root.getLinkedRecords('getUsers') ?? []).filter(proxy => proxy.getDataID() !== id)

        root.setLinkedRecords(updated, 'getUsers')
      }
    })
  }, [deleteUser, id, showToast])

  const handleDeleteRequest = useCallback(() => {
    setDialogVisibiity(true)
  }, [])

  const handleDialogClose = useCallback(() => {
    setDialogVisibiity(false)
  }, [])

  return (
    <ListItem>
      <ListItemText
        primary={[firstName, lastName].join(' ')}
        primaryTypographyProps={{ noWrap: true, title: [firstName, lastName].join(' ') }}
        secondary={email}
        secondaryTypographyProps={{ noWrap: true, title: email }}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" disabled={isButtonDisabled} onClick={handleDeleteRequest}>
          <Delete color={isButtonDisabled ? 'inherit' : 'error'} />
        </IconButton>
      </ListItemSecondaryAction>
      <ConfirmationDialog
        title="Are you sure?"
        isOpen={isDialogShown}
        onConfirm={handleDeleteConfirm}
        onClose={handleDialogClose}
      >
        Do you want to delete user?
      </ConfirmationDialog>
    </ListItem>
  )
}

export const userFragment = graphql`
  fragment UserItem_user on User {
    id
    firstName
    lastName
    email
  }
`

const deleteUserMutation = graphql`
  mutation UserItemDeleteMutation($input: DeleteUserInput!) {
    deleteUser(deleteUserInput: $input)
  }
`
