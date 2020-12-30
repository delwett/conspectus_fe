import React, { ReactElement, useCallback, useState } from 'react'
import clsx from 'clsx'
import { Comment, Edit } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { graphql, useFragment } from 'relay-hooks'
import { Subtask_task$key } from '@/__generated__/Subtask_task.graphql'
import useDragTask from '../../hooks/useDragTask'
import Status from '../Status'
import EditableDescription from '../EditableDescription'
import DeleteTask from '../DeleteTask'
import CreateComment from '../CreateComment'
import Comments from '../Comments'
import { Container, Entity } from './styles'

type SubtaskProps = {
  subtask: Subtask_task$key
  onListChanged: () => void
}

export default function Subtask(props: SubtaskProps): ReactElement {
  const { subtask, onListChanged } = props
  const fragment = useFragment(subtaskFragment, subtask)
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

  const [{ isDragging }, $drag] = useDragTask({ id, canDrag: true })

  return (
    <Container ref={$drag} className={clsx({ 'is-dragging': isDragging })}>
      <Entity>
        <Status id={id} status={status} />
        <EditableDescription id={id} description={description} isEditing={isEditing} onEdited={handleEdited} />
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

export const subtaskFragment = graphql`
  fragment Subtask_task on Task {
    id
    description
    status
    ...Comments_task
  }
`
