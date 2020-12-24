import React, { ReactElement } from 'react'
import { Form as FinalForm, Field } from 'react-final-form'
import composeValidators from '@/utils/final-form/compose-validators'
import { required, email, minLength } from '@/utils/final-form/validators'
import { password } from '@/utils/final-form/parsers'
import { Form, FormInput, SubmitButton } from './styles'

export type FormValues = {
  firstName: string
  lastName: string | null
  email: string
  password: string
}

type NewUserFormProps = {
  onSubmit: (values: FormValues) => Promise<void>
}

export default function NewUserForm(props: NewUserFormProps): ReactElement {
  const { onSubmit } = props

  return (
    <FinalForm onSubmit={onSubmit}>
      {({ handleSubmit, submitting }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            label="First name"
            variant="outlined"
            size="small"
            component={FormInput}
            validate={required()}
          />
          <Field name="lastName" label="Last name" variant="outlined" size="small" component={FormInput} />
          <Field
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            size="small"
            component={FormInput}
            validate={composeValidators(required(), email())}
          />
          <Field
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            size="small"
            component={FormInput}
            validate={composeValidators(required(), minLength(6))}
            parse={password}
          />
          <SubmitButton type="submit" variant="contained" color="primary" disabled={submitting}>
            Invite
          </SubmitButton>
        </Form>
      )}
    </FinalForm>
  )
}
