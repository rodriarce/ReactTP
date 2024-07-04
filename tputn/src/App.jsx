import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { UserCtx } from './context/UserContex'


function App() {

  const {user, setUser} = useContext(UserCtx);

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user)
        {
          setUser(user.email);
        }
    })

  }, []);

  
  return (
         <>
        {user ?
         
        <>       
           <nav className='navbar'>
    <NavLink to = {"/"}> Main App</NavLink>   
    <NavLink to = {"logout"}> Logout</NavLink>
   
        
      
       </nav>    
      <Outlet></Outlet>  
      
        </>    
      
        :  
        <>
        <h1> Not User</h1>

        //  <nav className='navbar'>
    //   <NavLink to = {"/"}> Main App</NavLink>
    //   <NavLink to ={"register"}> register</NavLink>
    //   <NavLink to = {"login"}>Login</NavLink>        
      
    //   </nav>    
    

        </>

        }  
    </>
  )
  
}

export default App
