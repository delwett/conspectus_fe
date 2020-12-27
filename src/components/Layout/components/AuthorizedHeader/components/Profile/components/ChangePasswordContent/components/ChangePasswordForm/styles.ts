import { styled } from '@linaria/react'
import FormInputBase from '@/components/FormInput'
import { Button } from '@material-ui/core'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormInput = styled(FormInputBase)`
  margin: 12px 0 0;

  & + & {
    margin: 24px 0 0;
  }
`

export const SubmitButton = styled(Button)`
  align-self: flex-end;
  margin: 24px 0 0;
`
