import { useState } from "react"

function App() {
  const [color,setColor]=useState("olive")

  return ( 
    <>
      <div className="w-full h-screen duration-200"
       style={{backgroundColor:color}}>
      <div className="flex flex-wrap justify-center px-10 py-10 text-gray-100 text-[5rem]">Welcome! It's Prakrati<br/>Traffic Light</div>
      <div className="fixed flex flex-warap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-1 py-2 rounded-xl">
        <button 
        onClick={()=>(setColor("red"))}
        className="outline-none px-3 py-1 rounded-full text-" 
        style={{backgroundColor:"red"}}> 
        Red</button>

        <button 
        onClick={()=>(setColor("yellow"))}
        className="outline-none px-3 py-1 rounded-full text-" 
        style={{backgroundColor:"yellow"}}> 
        yellow</button>

        <button
        onClick={()=>(setColor("green"))}
        className="outline-none px-3 py-1 rounded-full text-" 
        style={{backgroundColor:"green"}}> 
        green</button>





      </div>
      </div>
      </div>
      
    
    </>
  )
}

export default App
