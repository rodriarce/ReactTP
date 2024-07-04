import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Register() {

const handleSubmit = (e) =>
  {
    e.preventDefault();
    const {email, password} = e.target.elements;  

    createUserWithEmailAndPassword(auth, email.value, password.value).then(

      (userCredentials) => {const user = userCredentials.user;

        console.log("succes Register" + user );
        alert("Succes Register user");


      }).catch((error) => {console.log("Error Regsitering") + error});

  }


  return (
    <>    
    <h2>Register</h2>
<form onSubmit={handleSubmit}>
  <label>
    Email
    <input
      type="text"
      placeholder="jane@doe.com"
      name="email"
    />
  </label>
  <br />
  <label>
    Password
    <input
      type="text"
      placeholder="keep your password safe..."
      name="password"
    />
  </label>
  <br />
  <button type="submit">register</button>
</form>
    </>
  )
}

export default Register