import React, { ReactElement } from 'react'
import { Form as FinalForm, Field } from 'react-final-form'
import composeValidators from '@/utils/final-form/compose-validators'
import { required, email } from '@/utils/final-form/validators'
import { Form, FormInput, SubmitButton } from './styles'

export type FormValues = {
  firstName: string
  lastName: string | null
  email: string
}

type UpdateProfileFormProps = {
  initialValues: FormValues
  onSubmit: (values: FormValues) => Promise<void>
}

export default function UpdateProfileForm(props: UpdateProfileFormProps): ReactElement {
  const { initialValues, onSubmit } = props

  return (
    <FinalForm initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, submitting, invalid, dirty }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            label="First name"
            variant="outlined"
            size="small"
            component={FormInput}
            validate={required()}
          />
          <Field
            name="lastName"
            label="Last name"
            variant="outlined"
            size="small"
            parse={v => v ?? null}
            component={FormInput}
          />
          <Field
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            size="small"
            component={FormInput}
            validate={composeValidators(required(), email())}
          />
          <SubmitButton type="submit" variant="contained" color="primary" disabled={submitting || invalid || !dirty}>
            Edit
          </SubmitButton>
        </Form>
      )}
    </FinalForm>
  )
}
