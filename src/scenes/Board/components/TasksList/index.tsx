import React, { ReactElement, useState, useCallback } from 'react'
import clsx from 'clsx'
import { IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { graphql, useFragment } from 'relay-hooks'
import { TasksList_board$key } from '@/__generated__/TasksList_board.graphql'
import useDropTask from './hooks/useDropTask'
import CreateTask from './components/CreateTask'
import Task from './components/Task'
import { Container, NewTask } from './styles'

type TasksListProps = {
  board: TasksList_board$key
  onListChanged: () => void
}

export default function TasksList(props: TasksListProps): ReactElement {
  const { board, onListChanged } = props

  const [isCreateTaskOpened, setCreateTaskVisibility] = useState(false)

  const handleCreateClick = useCallback(() => setCreateTaskVisibility(v => !v), [])
  const handleCreated = useCallback(() => {
    onListChanged()
    setCreateTaskVisibility(false)
  }, [onListChanged])

  const { tasks } = useFragment(boardFragment, board)

  const [{ isOver }, $drop] = useDropTask({
    parentId: null,
    canDrop: () => true,
    onDropped: onListChanged
  })

  return (
    <Container className={clsx({ ready: isOver })} ref={$drop}>
      <NewTask variant="outlined">
        <IconButton title="Add task" color={isCreateTaskOpened ? 'primary' : 'secondary'} onClick={handleCreateClick}>
          <Add />
        </IconButton>
        {isCreateTaskOpened ? <CreateTask parentId={null} onCreated={handleCreated} /> : null}
      </NewTask>
      {tasks.map(task => (
        <Task key={task.id} task={task} onListChanged={onListChanged} />
      ))}
    </Container>
  )
}

export const boardFragment = graphql`
  fragment TasksList_board on Board {
    tasks {
      id
      ...Task_task
    }
  }
`
