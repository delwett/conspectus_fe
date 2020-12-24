import React, { ReactElement, useCallback } from 'react'
import { DialogContent } from '@material-ui/core'
import { graphql, useMutation } from 'relay-hooks'
import type { InviteUserContentMutation } from '@/__generated__/InviteUserContentMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import NewUserForm, { FormValues } from './components/NewUserForm'

type InviteUserContentProps = {
  onInvited: () => void
}

export default function InviteUserContent(props: InviteUserContentProps): ReactElement {
  const { onInvited } = props

  const { showToast } = useToasts()
  const [inviteUser] = useMutation<InviteUserContentMutation>(inviteUserMutation)

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      await inviteUser({
        variables: { input: values },
        onError: error => {
          showToast(asErrorMessage(error), { variant: 'error' })
        },
        onCompleted: () => {
          showToast('User has been added', { variant: 'success' })
          onInvited()
        }
      })
    },
    [inviteUser, showToast, onInvited]
  )

  return (
    <DialogContent dividers>
      <NewUserForm onSubmit={handleSubmit} />
    </DialogContent>
  )
}

const inviteUserMutation = graphql`
  mutation InviteUserContentMutation($input: CreateUserInput!) {
    createUser(createUserInput: $input) {
      id
    }
  }
`
