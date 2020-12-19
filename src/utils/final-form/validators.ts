import type { ReactNode, ReactElement } from 'react'
import validate from 'validator'

type FieldValidator<FieldValue> = (value: FieldValue) => any

type Message = ReactNode | ReactElement | string

export function required(message: Message = 'Please fill it'): FieldValidator<any | undefined> {
  return value => (!value || (typeof value === 'string' && value.trim().length === 0) ? message : undefined)
}

export function email(message: Message = 'Email is incorrect'): FieldValidator<string | undefined> {
  return value => (value && !validate.isEmail(value) ? message : undefined)
}
