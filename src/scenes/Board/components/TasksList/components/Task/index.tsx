import React, { ReactElement, useCallback, useState } from 'react'
import clsx from 'clsx'
import { Add, Comment, Edit } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { graphql, useFragment } from 'relay-hooks'
import { Task_task$key } from '@/__generated__/Task_task.graphql'
import useDropTask from '../../hooks/useDropTask'
import useDragTask from '../../hooks/useDragTask'
import type { DraggableItem } from '../../types'
import Status from '../Status'
import EditableDescription from '../EditableDescription'
import DeleteTask from '../DeleteTask'
import CreateComment from '../CreateComment'
import Comments from '../Comments'
import Subtask from '../Subtask'
import { DroppableContainer, DraggableContainer, Entity, CreateTask, Subtasks } from './styles'

type TaskProps = {
  task: Task_task$key
  onListChanged: () => void
}

export default function Task(props: TaskProps): ReactElement {
  const { task, onListChanged } = props
  const fragment = useFragment(taskFragment, task)
  const { id, description, status, subtasks } = fragment

  const [isEditing, setEditing] = useState(false)
  const [isCreatingComment, setCreatingComment] = useState(false)
  const [isCreatingSubtask, setCreatingSubtask] = useState(false)

  const handleEditClick = useCallback(() => setEditing(value => !value), [])
  const handleEdited = useCallback(() => setEditing(false), [])

  const handleCreateCommentClick = useCallback(() => setCreatingComment(value => !value), [])
  const handleCommentCreated = useCallback(() => {
    setCreatingComment(false)
    onListChanged()
  }, [onListChanged])

  const handleCreateSubtaskClick = useCallback(() => setCreatingSubtask(value => !value), [])
  const handleSubtaskCreated = useCallback(() => {
    setCreatingSubtask(false)
    onListChanged()
  }, [onListChanged])

  function canDrop(item: DraggableItem): boolean {
    const subtasksIds = subtasks.map(subtask => subtask.id)

    return status !== 'COMPLETED' && id !== item.id && !subtasksIds.includes(item.id)
  }

  const [{ isOver, isAllowed }, $drop] = useDropTask({
    parentId: id,
    canDrop,
    onDropped: onListChanged
  })

  const canDrag = !subtasks.length
  const [{ isDragging }, $drag] = useDragTask({ id, canDrag })

  return (
    <DroppableContainer
      ref={$drop}
      className={clsx({ ready: isOver && isAllowed, allowed: !isOver && isAllowed, error: isOver && !isAllowed })}
      variant="outlined"
    >
      <DraggableContainer ref={$drag} className={clsx({ 'is-dragging': isDragging, 'can-drag': canDrag })}>
        <Entity>
          <Status id={id} status={status} />
          <EditableDescription id={id} description={description} isEditing={isEditing} onEdited={handleEdited} />
          <IconButton
            title="Add subtask"
            size="small"
            color={isCreatingSubtask ? 'primary' : 'secondary'}
            disabled={status === 'COMPLETED'}
            onClick={handleCreateSubtaskClick}
          >
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
        {isCreatingSubtask ? <CreateTask parentId={id} onCreated={handleSubtaskCreated} /> : null}
        {isCreatingComment ? <CreateComment taskId={id} onCreated={handleCommentCreated} /> : null}
        <Comments task={fragment} />
        <Subtasks>
          {subtasks.map(subtask => (
            <Subtask key={subtask.id} subtask={subtask} onListChanged={onListChanged} />
          ))}
        </Subtasks>
      </DraggableContainer>
    </DroppableContainer>
  )
}

export const taskFragment = graphql`
  fragment Task_task on Task {
    id
    description
    status
    ...Comments_task
    subtasks {
      id
      ...Subtask_task
    }
  }
`
