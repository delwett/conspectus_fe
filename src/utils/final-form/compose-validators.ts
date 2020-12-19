import { FieldValidator } from 'final-form'

type Validators<T> = ReadonlyArray<FieldValidator<T>>

export default function composeValidators<T>(...validators: Validators<T>): FieldValidator<T> {
  const composedValidator: FieldValidator<T> = (...args) => {
    return validators.reduce((error, validator) => {
      if (error) return error
      return validator(...args)
    }, undefined)
  }
  return composedValidator
}
