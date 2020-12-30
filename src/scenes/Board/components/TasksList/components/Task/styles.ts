import { styled } from '@linaria/react'
import { Card } from '@material-ui/core'
import CreateTaskBase from '../CreateTask'

export const Container = styled(Card)`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 16px 0 0;
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
