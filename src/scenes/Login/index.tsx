import React, { ReactElement, useCallback } from 'react'
import { graphql } from 'react-relay'
import { useMutation } from 'relay-hooks'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import type { LoginMutation } from './__generated__/LoginMutation.graphql'
import SignInForm, { FormValues } from './components/SignInForm'
import { Container, Card, Typography } from './styles'

export default function Login(): ReactElement {
  const [login] = useMutation<LoginMutation>(loginMutation)
  const { showToast } = useToasts()

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      await login({
        variables: { input: values },
        onError: error => showToast(asErrorMessage(error), { variant: 'error' }),
        onCompleted: respose => {
          console.log({ respose })
        }
      })
    },
    [login, showToast]
  )

  return (
    <Container maxWidth="sm">
      <Card variant="outlined">
        <Typography variant="h5" noWrap>
          Welcome to Conspectus
        </Typography>
        <Typography variant="subtitle2" noWrap>
          Please sign in to proceed
        </Typography>
        <SignInForm onSubmit={handleSubmit} />
      </Card>
    </Container>
  )
}

const loginMutation = graphql`
  mutation LoginMutation($input: LoginInput!) {
    login(loginInput: $input)
  }
`
