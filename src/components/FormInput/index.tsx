import React, { ReactElement } from 'react'
import { FieldRenderProps } from 'react-final-form'
import { TextField, TextFieldProps } from '@material-ui/core'

type FormInputProps = TextFieldProps & FieldRenderProps<string | undefined, HTMLTextAreaElement | HTMLInputElement>

export default function FormInput(props: FormInputProps): ReactElement {
  const { input, meta, helperText = null, ...rest } = props

  const { error = null, invalid, touched } = meta
  const isErrorShown = touched && invalid

  return <TextField {...rest} {...input} error={isErrorShown} helperText={isErrorShown ? error : helperText} />
}
