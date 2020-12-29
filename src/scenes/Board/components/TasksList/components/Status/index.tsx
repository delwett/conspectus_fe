import React, { ReactElement, ChangeEvent, useCallback } from 'react'
import { Checkbox } from '@material-ui/core'
import { graphql, useMutation } from 'relay-hooks'
import { StatusUpdateMutation, TaskStatusEnum } from '@/__generated__/StatusUpdateMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'

type StatusProps = {
  id: string
  status: TaskStatusEnum
}

export default function Status(props: StatusProps): ReactElement {
  const { id, status } = props

  const { showToast } = useToasts()

  const [updateStatus, { loading }] = useMutation<StatusUpdateMutation>(updateTaskStatus)

  const handleChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      await updateStatus({
        variables: { input: { id, status: e.target.checked ? 'COMPLETED' : 'IN_PROGRESS' } },
        onError: error => {
          showToast(asErrorMessage(error), { variant: 'error' })
        },
        onCompleted: () => {
          showToast('Status has been updated', { variant: 'success' })
        }
      })
    },
    [id, showToast, updateStatus]
  )

  return (
    <Checkbox
      checked={status === 'COMPLETED'}
      color="secondary"
      name="status"
      size="small"
      disabled={loading}
      onChange={handleChange}
    />
  )
}

const updateTaskStatus = graphql`
  mutation StatusUpdateMutation($input: UpdateTaskStatusInput!) {
    updateTaskStatus(updateTaskStatusInput: $input) {
      id
      status
    }
  }
`
