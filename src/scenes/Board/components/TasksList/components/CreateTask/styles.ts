import { styled } from '@linaria/react'
import { hideVisually } from 'polished'

export const Form = styled.form`
  width: 100%;
`

export const FakeSubmit = styled.input`
  ${hideVisually()};
`
