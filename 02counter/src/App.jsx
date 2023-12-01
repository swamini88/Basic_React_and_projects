import { useState } from 'react'

import './App.css'

function App() {

  let [counter,setCounter]= useState(15)
  //let counter =15

  const Addcounter= ()=>{
    
  //  if(counter < 20){
  //   setCounter(counter+1)
  // }
  setCounter(prevcount => prevcount+1)
  setCounter(prevcount => prevcount+1)
  setCounter(prevcount => prevcount+1)
  setCounter(prevcount => prevcount+1)

  }
  const Removecounter=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
   
  }
  return (
    <>
      <h1>chai aur code</h1>
      <h3>counter {counter}</h3>
      <button onClick={Addcounter}>add count </button>
      <br/>
      <br/>
      <button onClick={Removecounter}>remove count </button>
   </>
  )
}

export default App
