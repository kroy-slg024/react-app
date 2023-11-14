import React, { useState } from 'react'
import { Login } from './Components/Login/LoginPage'
import { SignUp } from './Components/SignUp/SignUpPage';

export default function App() {
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <div className='App'>
      {
        currentForm === "login" ? <Login/> : <SignUp/>
      }
     </div>
  )
}
