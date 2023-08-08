import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainApp from './09-useContext/MainApp'


import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  {/* <React.StrictMode> */}
      <MainApp />
  {/* </React.StrictMode>, */}
  </BrowserRouter>
)
