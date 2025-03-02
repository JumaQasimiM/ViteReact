import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 

// // class base component 
// class Car extends React.Component{
//  render(){
//   return <h1>hello react 2025</h1>
//  }

// }

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
