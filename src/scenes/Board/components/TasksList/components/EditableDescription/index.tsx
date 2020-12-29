import React, { ReactElement, FormEvent, ChangeEvent, useState, useCallback, useEffect } from 'react'
import { InputAdornment, Input } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { graphql, useMutation } from 'relay-hooks'
import type { EditableDescriptionMutation } from '@/__generated__/EditableDescriptionMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import { Form, FakeSubmit, Typography } from './styles'

type EditableDescriptionProps = {
  id: string
  description: string
  isEditing: boolean
  onEdited: () => void
}

export default function EditableDescription(props: EditableDescriptionProps): ReactElement {
  const { id, description, isEditing, onEdited } = props
  const { showToast } = useToasts()

  const [newDescription, setDescription] = useState('')
  const [updateDescription, { loading }] = useMutation<EditableDescriptionMutation>(updateTaskDescription)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }, [])

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      await updateDescription({
        variables: { input: { id, description: newDescription } },
        onError: error => {
          showToast(asErrorMessage(error), { variant: 'error' })
        },
        onCompleted: () => {
          onEdited()
          showToast('Description has been updated', { variant: 'success' })
        }
      })
    },
    [id, newDescription, onEdited, showToast, updateDescription]
  )

  useEffect(() => {
    setDescription(description)
  }, [description])

  if (isEditing) {
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          value={newDescription}
          fullWidth
          required
          disabled={loading}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <Edit color="primary" />
            </InputAdornment>
          }
        />
        <FakeSubmit type="submit" disabled={loading} />
      </Form>
    )
  }

  return (
    <Typography variant="h6" title={description} noWrap>
      {description}
    </Typography>
  )
}

const updateTaskDescription = graphql`
  mutation EditableDescriptionMutation($input: UpdateTaskDescriptionInput!) {
    updateTaskDescription(updateTaskDescriptionInput: $input) {
      id
      description
    }
  }
`
