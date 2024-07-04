import { useContext, useEffect, useState } from 'react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { getDataObject } from './data';
import Product from './Product';
import { UserCtx } from '../context/UserContex';

function Home() {

  const [userData, setData] = useState([]);

  const {user} = useContext(UserCtx);

  useEffect(() => {console.log(getDataObject());
    setData(getDataObject());

  }, []);
  return (
    <>
    {
       user ?  
       <> 
       {userData.map((product) => (<Product key = {product.id} product = {product}></Product>))    }
       </>
       :
       <>       
       </>
    }     
    
    </>
  )
}

export default Home