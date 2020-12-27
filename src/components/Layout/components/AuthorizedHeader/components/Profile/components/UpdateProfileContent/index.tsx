import React, { ReactElement, useCallback, useMemo } from 'react'
import { DialogContent } from '@material-ui/core'
import { graphql, useMutation } from 'relay-hooks'
import type { UpdateProfileContentMutation } from '@/__generated__/UpdateProfileContentMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import useActiveUser from '@/hooks/useActiveUser'
import UpdateProfileForm, { FormValues } from './components/UpdateProfileForm'

type UpdateProfileContentProps = {
  onUpdated: () => void
}

export default function UpdateProfileContent(props: UpdateProfileContentProps): ReactElement {
  const { onUpdated } = props

  const { activeUser, error } = useActiveUser()
  const { firstName, lastName, email } = activeUser ?? { firstName: '', lastName: null, email: '' }

  const { showToast } = useToasts()
  const [updateProfile] = useMutation<UpdateProfileContentMutation>(updateProfileMutation)

  const initialValues = useMemo(() => ({ firstName, lastName, email }), [email, firstName, lastName])

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      await updateProfile({
        variables: { input: values },
        onError: error => {
          showToast(asErrorMessage(error), { variant: 'error' })
        },
        onCompleted: () => {
          showToast('Profile has been updated', { variant: 'success' })
          onUpdated()
        }
      })
    },
    [onUpdated, showToast, updateProfile]
  )

  if (error) {
    showToast(asErrorMessage(error), { variant: 'error' })
  }

  return (
    <DialogContent dividers>
      <UpdateProfileForm initialValues={initialValues} onSubmit={handleSubmit} />
    </DialogContent>
  )
}

const updateProfileMutation = graphql`
  mutation UpdateProfileContentMutation($input: UpdateUserInput!) {
    updateUser(updateUserInput: $input) {
      id
      firstName
      lastName
      email
    }
  }
`
