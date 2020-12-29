import React, { ReactElement, useCallback, useState } from 'react'
import { Add, Comment, Edit } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { graphql, useFragment } from 'relay-hooks'
import { Task_task$key } from '@/__generated__/Task_task.graphql'
import Status from '../Status'
import EditableDescription from '../EditableDescription'
import DeleteTask from '../DeleteTask'
import CreateComment from '../CreateComment'
import Comments from '../Comments'
import { Container, Entity } from './styles'

type TaskProps = {
  task: Task_task$key
  onListChanged: () => void
}

export default function Task(props: TaskProps): ReactElement {
  const { task, onListChanged } = props
  const fragment = useFragment(taskFragment, task)
  const { id, description, status } = fragment

  const [isEditing, setEditing] = useState(false)
  const [isCreatingComment, setCreatingComment] = useState(false)

  const handleEditClick = useCallback(() => setEditing(value => !value), [])
  const handleEdited = useCallback(() => setEditing(false), [])

  const handleCreateCommentClick = useCallback(() => setCreatingComment(value => !value), [])
  const handleCommentCreated = useCallback(() => {
    setCreatingComment(false)
    onListChanged()
  }, [onListChanged])

  return (
    <Container variant="outlined">
      <Entity>
        <Status id={id} status={status} />
        <EditableDescription id={id} description={description} isEditing={isEditing} onEdited={handleEdited} />
        <IconButton aria-label="add subtask" size="small" disabled={status === 'COMPLETED'}>
          <Add />
        </IconButton>
        <IconButton
          title="Add comment"
          size="small"
          color={isCreatingComment ? 'primary' : 'secondary'}
          onClick={handleCreateCommentClick}
        >
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
        <DeleteTask id={id} status={status} onDeleted={onListChanged} />
      </Entity>
      {isCreatingComment ? <CreateComment taskId={id} onCreated={handleCommentCreated} /> : null}
      <Comments task={fragment} />
    </Container>
  )
}

export const taskFragment = graphql`
  fragment Task_task on Task {
    id
    description
    status
    ...Comments_task
  }
`
