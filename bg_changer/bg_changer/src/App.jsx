import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [color,setColor]=useState("olive")
  let array=["red","green","blue","yellow","skyblue","black","pink"]
  return (
    <div  style={{backgroundColor:color}} className='background'>
      {array.map((event)=>( <button onClick={()=>{setColor(event)}} style={{backgroundColor:event}}  >{event}</button>))}
    
    </div>
  )
}

export default App