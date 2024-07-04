import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Product from './components/Product.jsx'
import { UserCtxProvider } from './context/UserContex.jsx'
import Logout from './components/Logout.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserCtxProvider>

  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<App></App>}>
    <Route index element = {<Home></Home>}>
    </Route>    
    </Route>
    <Route path = "register" element = {<Register>  </Register>} ></Route>
    <Route path = "login" element = {<Login></Login>}></Route>
    <Route path = "logout" element = {<Logout></Logout>}> </Route>
    <Route path = "*" element = {<h2> No Existe el path</h2>}></Route>
   
    </Routes>
  
  </BrowserRouter>

  </UserCtxProvider> 
  
  </React.StrictMode>,
)
