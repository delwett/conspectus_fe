import React, { ReactElement, useCallback } from 'react'
import SignInForm from './components/SignInForm'
import { Container, Card, Typography } from './styles'

export default function Login(): ReactElement {
  const handleSubmit = useCallback(async () => {
    new Promise(resolve => resolve(undefined)).catch(undefined)
  }, [])

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
