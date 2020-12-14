import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import './style.css'

render(
  <StrictMode>
    <div className="test">123</div>
  </StrictMode>,
  document.body.querySelector('#app-root')
)
