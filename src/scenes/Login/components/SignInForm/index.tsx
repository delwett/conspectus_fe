import React, { ReactElement } from 'react'
import { Form as FinalForm, Field } from 'react-final-form'
import composeValidators from '@/utils/final-form/compose-validators'
import { required, email } from '@/utils/final-form/validators'
import { password } from '@/utils/final-form/parsers'
import { Form, FormInput, SubmitButton } from './styles'

export type FormValues = {
  email: string
  password: string
}

type SignInFormProps = {
  onSubmit: (values: FormValues) => Promise<void>
}

export default function SignInForm(props: SignInFormProps): ReactElement {
  const { onSubmit } = props

  return (
    <FinalForm onSubmit={onSubmit}>
      {({ handleSubmit, submitting }) => (
        <Form onSubmit={handleSubmit}>
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
            validate={required()}
            parse={password}
          />
          <SubmitButton type="submit" variant="contained" color="primary" disabled={submitting}>
            Sign in
          </SubmitButton>
        </Form>
      )}
    </FinalForm>
  )
}
