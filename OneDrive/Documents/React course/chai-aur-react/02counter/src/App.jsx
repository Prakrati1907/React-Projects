import { useState } from 'react'

import './App.css'

function App() {

  let [counter,setCounter] =useState(5)
  

  // let counter=5

  const addValue=()=>{
    console.log("clicked",counter);
    // counter=counter+1 
    setCounter(counter+1)
  }

  const removeValue=()=>{
    if(counter>0)
    setCounter(counter-1)
    else 
    return
  }

  return (
    <>
      <h1>Prakrati's Counter project </h1>
      <h2>counter value:{counter}</h2>
       <button onClick ={addValue}>Add value</button>
       <br/>
       <button onClick={removeValue}>remove value</button>
      
    </>
  )
}

export default App
