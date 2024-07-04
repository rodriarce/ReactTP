import React, { useContext } from 'react'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { UserCtx } from '../context/UserContex';
function Logout() {

  const {setUser} = useContext(UserCtx);
    const signOutUser = () => {

        signOut(auth).then(() => {console.log("Succes Logout");
            setUser(null);
            alert("Succes Logout User");


        })
        .catch((error) => {console.log(errror)});
       

    };

  return (
    <>
    <h1> LogOut user</h1>
    <button onClick={signOutUser}>Log Out</button>
    
   </>
  )
}

export default Logout