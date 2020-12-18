import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import App from '@/containers/App'
import './global-styles'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.body.querySelector('#app-root')
)
