import React, { ReactElement, FormEvent, ChangeEvent, useState, useCallback } from 'react'
import { InputAdornment, Input } from '@material-ui/core'
import { Comment } from '@material-ui/icons'
import { graphql, useMutation } from 'relay-hooks'
import type { CreateCommentMutation } from '@/__generated__/CreateCommentMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import { Form, FakeSubmit } from './styles'

type CreateCommentProps = {
  taskId: string
  onCreated: () => void
}

export default function CreateComment(props: CreateCommentProps): ReactElement {
  const { taskId, onCreated } = props
  const { showToast } = useToasts()

  const [text, setText] = useState('')
  const [createComment, { loading }] = useMutation<CreateCommentMutation>(createCommentMutation)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      await createComment({
        variables: { input: { taskId, text } },
        onError: error => {
          showToast(asErrorMessage(error), { variant: 'error' })
        },
        onCompleted: () => {
          showToast('Comment has been created', { variant: 'success' })
          onCreated()
        }
      })
    },
    [createComment, taskId, text, showToast, onCreated]
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={text}
        fullWidth
        required
        autoFocus
        disabled={loading}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <Comment color="primary" />
          </InputAdornment>
        }
      />
      <FakeSubmit type="submit" disabled={loading} />
    </Form>
  )
}

const createCommentMutation = graphql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(createCommentInput: $input) {
      id
    }
  }
`
