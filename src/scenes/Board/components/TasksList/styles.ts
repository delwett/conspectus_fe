import { styled } from '@linaria/react'
import { Card } from '@material-ui/core'

export const Container = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const NewTask = styled(Card)`
  display: flex;
  align-items: center;
  padding: 0 16px;
`
