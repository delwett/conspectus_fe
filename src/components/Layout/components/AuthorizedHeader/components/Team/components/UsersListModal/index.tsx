import React, { ReactElement } from 'react'
import { CircularProgress } from '@material-ui/core'
import { graphql, useQuery } from 'relay-hooks'
import type { UsersListModalQuery } from '@/__generated__/UsersListModalQuery.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import Modal from '@/components/Modal'
import UserItem from './components/UserItem'
import { List } from './styles'

type UsersListModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function UsersListModal(props: UsersListModalProps): ReactElement {
  const { isOpen, onClose } = props

  const { showToast } = useToasts()

  const { props: data, error } = useQuery<UsersListModalQuery>(getUsersList)
  const isLoading = !data && !error
  const usersList = data?.getUsers ?? []

  if (error) {
    showToast(asErrorMessage(error), { variant: 'error' })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <List>
          {usersList.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </List>
      )}
    </Modal>
  )
}

export const getUsersList = graphql`
  query UsersListModalQuery {
    getUsers {
      id
      ...UserItem_user
    }
  }
`
