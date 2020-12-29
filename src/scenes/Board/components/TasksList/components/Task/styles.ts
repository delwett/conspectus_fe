import { styled } from '@linaria/react'
import { Card } from '@material-ui/core'

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
