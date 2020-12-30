import { styled } from '@linaria/react'
import { rgba } from 'polished'
import { Card } from '@material-ui/core'
import { themeBase } from '@/theme'
import CreateTaskBase from '../CreateTask'

export const DroppableContainer = styled(Card)`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 16px 0 0;

  &.ready {
    background-color: ${rgba(themeBase.palette.success.main, 0.1)};
  }

  &.allowed {
    background-color: ${rgba(themeBase.palette.primary.main, 0.1)};
  }

  &.error {
    background-color: ${rgba(themeBase.palette.error.dark, 0.1)};
  }
`

export const DraggableContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;

  &.is-dragging {
    background-color: ${rgba(themeBase.palette.primary.main, 0.1)};
  }

  &.can-drag {
    cursor: move;

    &:hover {
      background-color: ${rgba(themeBase.palette.primary.main, 0.1)};
    }
  }
`

export const Entity = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`

export const CreateTask = styled(CreateTaskBase)`
  padding: 0 0 0 24px;
`

export const Subtasks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 24px;
`
