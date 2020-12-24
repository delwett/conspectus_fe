import React, { ReactElement } from 'react'
import { DialogContent, CircularProgress } from '@material-ui/core'
import { graphql, useQuery } from 'relay-hooks'
import type { UsersListContentQuery } from '@/__generated__/UsersListContentQuery.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import UserItem from './components/UserItem'
import { List } from './styles'

export default function UsersListContent(): ReactElement {
  const { showToast } = useToasts()

  const { props: data, error } = useQuery<UsersListContentQuery>(getUsersList, {}, { fetchPolicy: 'network-only' })
  const isLoading = !data && !error
  const usersList = data?.getUsers ?? []

  if (error) {
    showToast(asErrorMessage(error), { variant: 'error' })
  }

  return (
    <DialogContent dividers>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <List>
          {usersList.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </List>
      )}
    </DialogContent>
  )
}

export const getUsersList = graphql`
  query UsersListContentQuery {
    getUsers {
      id
      ...UserItem_user
    }
  }
`
