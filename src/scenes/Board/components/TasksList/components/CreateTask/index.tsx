import React, { ReactElement, FormEvent, ChangeEvent, useState, useCallback } from 'react'
import { InputAdornment, Input } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { graphql, useMutation } from 'relay-hooks'
import type { CreateTaskMutation } from '@/__generated__/CreateTaskMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import { Form, FakeSubmit } from './styles'

type CreateTaskProps = {
  className?: string
  parentId: string | null
  onCreated: () => void
}

export default function CreateTask(props: CreateTaskProps): ReactElement {
  const { className, parentId, onCreated } = props
  const { showToast } = useToasts()

  const [description, setDescription] = useState('')
  const [createTask, { loading }] = useMutation<CreateTaskMutation>(createTaskMutation)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }, [])

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      await createTask({
        variables: { input: { parentId, description } },
        onError: error => {
          showToast(asErrorMessage(error), { variant: 'error' })
        },
        onCompleted: () => {
          onCreated?.()
          showToast('Task has been created', { variant: 'success' })
        }
      })
    },
    [createTask, parentId, description, showToast, onCreated]
  )

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Input
        value={description}
        fullWidth
        required
        autoFocus
        disabled={loading}
        onChange={handleChange}
        startAdornment={
          parentId ? (
            <InputAdornment position="start">
              <Add color="primary" />
            </InputAdornment>
          ) : null
        }
      />
      <FakeSubmit type="submit" disabled={loading} />
    </Form>
  )
}

const createTaskMutation = graphql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(createTaskInput: $input) {
      id
    }
  }
`
