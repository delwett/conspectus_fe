import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import './global-styles'

render(
  <StrictMode>
    <div>123</div>
  </StrictMode>,
  document.body.querySelector('#app-root')
)
