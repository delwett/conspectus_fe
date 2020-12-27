import React, { ReactElement, useCallback } from 'react'
import { Form as FinalForm, Field } from 'react-final-form'
import composeValidators from '@/utils/final-form/compose-validators'
import { required, minLength } from '@/utils/final-form/validators'
import { Form, FormInput, SubmitButton } from './styles'
import { password } from '@/utils/final-form/parsers'
import { FieldValidator } from 'final-form'

export type FormValues = {
  oldPassword: string
  newPassword: string
}

type ChangePasswordFormProps = {
  onSubmit: (values: FormValues) => Promise<void>
}

export default function ChangePasswordForm(props: ChangePasswordFormProps): ReactElement {
  const { onSubmit } = props

  const handleFormSubmit = useCallback(
    async values => {
      const { newPassword, oldPassword } = values
      return onSubmit({ newPassword, oldPassword })
    },
    [onSubmit]
  )

  return (
    <FinalForm onSubmit={handleFormSubmit}>
      {({ handleSubmit, submitting, invalid }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            name="oldPassword"
            type="password"
            label="Old password"
            variant="outlined"
            size="small"
            component={FormInput}
            validate={composeValidators(required(), minLength(6))}
            parse={password}
          />
          <Field
            name="newPassword"
            type="password"
            label="New password"
            variant="outlined"
            size="small"
            component={FormInput}
            validate={composeValidators(required(), minLength(6))}
            parse={password}
          />
          <Field
            name="newPasswordConfirm"
            type="password"
            label="New password confirmation"
            variant="outlined"
            size="small"
            component={FormInput}
            validate={composeValidators(required(), minLength(6), validatePasswordConfirmation)}
            parse={password}
          />
          <SubmitButton type="submit" variant="contained" color="primary" disabled={submitting || invalid}>
            Change password
          </SubmitButton>
        </Form>
      )}
    </FinalForm>
  )
}

const validatePasswordConfirmation: FieldValidator<string | undefined> = (value, allValues) => {
  const { newPassword } = allValues as FormValues
  return value && newPassword && value !== newPassword ? 'Password confirmation should match with password' : undefined
}
