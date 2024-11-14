import { useState } from 'react'
import './App.css'
import Logo from './assets/Logo.png'
import Login from './Login'
import Signin from './Signin'
import Home from './Home'

function App() {
  
  return (
    <>
     <div>
      <img src={Logo} alt="" className='mt-10 ml-10' />
     </div>
     <Signin/>
     <Login/>
      <Home/>
    </>
  )
}

export default App
