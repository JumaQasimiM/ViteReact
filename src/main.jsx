import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Login from './login.jsx'
// class base component 
class Car extends React.Component{
 render(){
  return <h1>hello react 2025</h1>
 }

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Login />
    <Car />
  </StrictMode>,
)
