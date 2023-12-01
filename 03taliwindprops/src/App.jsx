import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    username:"Hitesh",
    age:25
  }
  
  return (
    <>
      
      <h1 className='bg-green-400 text-black rounded-xl mb-4' >Tailwind Test</h1>
      
      <Card username ="chaiAurcode" btnText="Click me" />
      <Card username="Swamini" btnText="vist me"/>
     
    </>
  )
}

export default App
