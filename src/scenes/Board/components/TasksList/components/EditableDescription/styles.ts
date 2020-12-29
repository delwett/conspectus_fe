import { styled } from '@linaria/react'
import { hideVisually } from 'polished'
import { Typography as TypographyBase } from '@material-ui/core'

export const Form = styled.form`
  width: 100%;
`

export const FakeSubmit = styled.input`
  ${hideVisually()};
`

export const Typography = styled(TypographyBase)`
  width: 100%;
`
