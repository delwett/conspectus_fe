import { styled } from '@linaria/react'
import { DatePicker as DatePickerBase } from '@material-ui/pickers'

export const Container = styled.div`
  display: flex;
  padding: 16px;
`

export const DatePicker = styled(DatePickerBase)`
  flex: 0 0 90px;
  margin: 0 0 0 24px;

  & input {
    text-align: center;
  }
`
