import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {

  const handleSubmit = (e) => 
    {
      e.preventDefault();
      const {email, password} = e.target.elements;
      signInWithEmailAndPassword(auth, email.value, password.value)
      .then((result) => {console.log(result);
        alert("Success Logged User");




      })
      .catch((error) => {console.log(error)})
      ;
    }


  return (
    <>    
    <h2>SignUp</h2>
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
  <button type="submit">signUp</button>
</form>
    </>
  )
}

export default Login