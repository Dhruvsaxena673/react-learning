import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>Hello world</h1>
    </div>
  )
}
const anotherElement=(
  <a href="https://google.com" target="_blank">Visit google</a>
)
const anotheruser='Hello'
const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click me to visit google',
  anotheruser
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,
)
