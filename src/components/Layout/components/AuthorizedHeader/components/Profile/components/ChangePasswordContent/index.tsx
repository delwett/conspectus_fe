import React, { ReactElement, useCallback } from 'react'
import { DialogContent } from '@material-ui/core'
import { graphql, useMutation } from 'relay-hooks'
import type { ChangePasswordContentMutation } from '@/__generated__/ChangePasswordContentMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import { setToken } from '@/utils/auth-tokens'
import useToasts from '@/hooks/useToast'
import ChangePasswordForm, { FormValues } from './components/ChangePasswordForm'

type ChangePasswordContentProps = {
  onChanged: () => void
}

export default function ChangePasswordContent(props: ChangePasswordContentProps): ReactElement {
  const { onChanged } = props

  const { showToast } = useToasts()
  const [changePassword] = useMutation<ChangePasswordContentMutation>(changePasswordMutation)

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      await changePassword({
        variables: { input: values },
        onError: error => {
          showToast(asErrorMessage(error), { variant: 'error' })
        },
        onCompleted: response => {
          setToken(String(response.updatePassword))
          showToast('Password has been changed', { variant: 'success' })
          onChanged()
        }
      })
    },
    [changePassword, showToast, onChanged]
  )

  return (
    <DialogContent dividers>
      <ChangePasswordForm onSubmit={handleSubmit} />
    </DialogContent>
  )
}

const changePasswordMutation = graphql`
  mutation ChangePasswordContentMutation($input: UpdatePasswordInput!) {
    updatePassword(updatePasswordInput: $input)
  }
`
