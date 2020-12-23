import React, { ReactElement, useCallback } from 'react'
import { graphql } from 'react-relay'
import { useMutation } from 'relay-hooks'
import type { LoginMutation } from '@/__generated__/LoginMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import { setToken } from '@/utils/auth-tokens'
import useActiveUser from '@/hooks/useActiveUser'
import useToasts from '@/hooks/useToast'
import SignInForm, { FormValues } from './components/SignInForm'
import { Container, Card, Typography } from './styles'

export default function Login(): ReactElement {
  const [login] = useMutation<LoginMutation>(loginMutation)
  const { retry } = useActiveUser()
  const { showToast } = useToasts()

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      await login({
        variables: {
          input: values
        },
        onError: error => {
          showToast(asErrorMessage(error), { variant: 'error' })
        },
        onCompleted: response => {
          setToken(String(response.login))
          retry()
        }
      })
    },
    [login, retry, showToast]
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
