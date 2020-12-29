import React, { ReactElement, useState, useCallback } from 'react'
import { Delete } from '@material-ui/icons'
import { useMutation, graphql } from 'relay-hooks'
import type { DeleteTaskMutation } from '@/__generated__/DeleteTaskMutation.graphql'
import type { TaskStatusEnum } from '@/__generated__/Task_task.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import ConfirmationDialog from '@/components/ConfirmationDialog'
import { IconButton } from './styles'

type DeleteTaskProps = {
  id: string
  status: TaskStatusEnum
  onDeleted: () => void
}

export default function DeleteTask(props: DeleteTaskProps): ReactElement {
  const { id, status, onDeleted } = props

  const [isDialogShown, setDialogVisibiity] = useState(false)
  const { showToast } = useToasts()

  const [deleteTask, { loading }] = useMutation<DeleteTaskMutation>(deleteTaskMutation)

  const isButtonDisabled = status === 'COMPLETED' || loading

  const handleDeleteConfirm = useCallback(async () => {
    await deleteTask({
      variables: { input: { id } },
      onError: error => {
        showToast(asErrorMessage(error), { variant: 'error' })
      },
      onCompleted: () => {
        showToast('Task has been deleted', { variant: 'success' })
        onDeleted()
      }
    })
  }, [deleteTask, id, onDeleted, showToast])

  const handleDeleteRequest = useCallback(() => {
    setDialogVisibiity(true)
  }, [])

  const handleDialogClose = useCallback(() => {
    setDialogVisibiity(false)
  }, [])

  return (
    <>
      <IconButton
        title="Delete task"
        size="small"
        color="secondary"
        disabled={isButtonDisabled}
        onClick={handleDeleteRequest}
      >
        <Delete color="error" />
      </IconButton>
      <ConfirmationDialog
        title="Are you sure?"
        isOpen={isDialogShown}
        onConfirm={handleDeleteConfirm}
        onClose={handleDialogClose}
      >
        Do you want to delete task and its subtasks?
      </ConfirmationDialog>
    </>
  )
}

const deleteTaskMutation = graphql`
  mutation DeleteTaskMutation($input: DeleteTaskInput!) {
    deleteTask(deleteTaskInput: $input)
  }
`
