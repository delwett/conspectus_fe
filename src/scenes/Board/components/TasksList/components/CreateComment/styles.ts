import { styled } from '@linaria/react'
import { hideVisually } from 'polished'

export const Form = styled.form`
  padding: 0 0 0 24px;
  width: 100%;
`

export const FakeSubmit = styled.input`
  ${hideVisually()};
`
