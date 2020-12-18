import React, { ReactElement } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Container, IconContainer, Controls, Button } from './styles'

export default function NotFound(): ReactElement {
  const history = useHistory()

  return (
    <Container>
      <IconContainer />
      <Controls>
        <Button variant="outlined" color="primary" onClick={history.goBack}>
          Return back
        </Button>
        <Button variant="contained" color="primary" to="/" component={NavLink}>
          Go to main
        </Button>
      </Controls>
    </Container>
  )
}
