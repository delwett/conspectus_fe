import { styled } from '@linaria/react'
import { rgba } from 'polished'
import { Card } from '@material-ui/core'
import { themeBase } from '@/theme'

export const Container = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 24px;
  margin: -24px;

  &.ready {
    background-color: ${rgba(themeBase.palette.success.main, 0.1)};
  }
`

export const NewTask = styled(Card)`
  display: flex;
  align-items: center;
  padding: 0 16px;
`
