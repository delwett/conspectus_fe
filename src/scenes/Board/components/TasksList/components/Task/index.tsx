import React, { ReactElement, useCallback, useState } from 'react'
import { IconButton } from '@material-ui/core'
import { Add, Comment, Delete, Edit } from '@material-ui/icons'
import { graphql, useFragment } from 'relay-hooks'
import { Task_task$key } from '@/__generated__/Task_task.graphql'
import Status from '../Status'
import EditableDescription from '../EditableDescription'
import { Container } from './styles'

type TaskProps = {
  task: Task_task$key
}

export default function Task(props: TaskProps): ReactElement {
  const { task } = props
  const { id, description, status } = useFragment(taskFragment, task)

  const [isEditing, setEditing] = useState(false)

  const handleEditClick = useCallback(() => setEditing(value => !value), [])
  const handleEdited = useCallback(() => setEditing(false), [])

  return (
    <Container variant="outlined">
      <Status id={id} status={status} />
      <EditableDescription id={id} description={description} isEditing={isEditing} onEdited={handleEdited} />
      <IconButton aria-label="add subtask" size="small">
        <Add />
      </IconButton>
      <IconButton aria-label="add comment" size="small">
        <Comment />
      </IconButton>
      <IconButton
        title="Edit description"
        size="small"
        color={isEditing ? 'primary' : 'secondary'}
        onClick={handleEditClick}
      >
        <Edit />
      </IconButton>
      <IconButton aria-label="delete task" size="small">
        <Delete />
      </IconButton>
    </Container>
  )
}

export const taskFragment = graphql`
  fragment Task_task on Task {
    id
    description
    status
  }
`
