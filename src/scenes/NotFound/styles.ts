import { styled } from '@linaria/react'
import { Button as ButtonBase } from '@material-ui/core'
import ErrorIcon from './icons/404.svg'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const IconContainer = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${ErrorIcon});
`

export const Controls = styled.div`
  display: flex;
  margin: 12px 0 0;
`

export const Button = styled(ButtonBase)`
  & + & {
    margin: 0 0 0 12px;
  }
`
