
import {useState} from 'react'

import './App.css'



function App() {
  const [counter,setCounter]=useState(0)
  function addvalue(){
    if (counter<20){

      setCounter(counter+1)
    }
    else{
      alert('Reached maximum count')
    }
    
  }
  const reduceval=()=>{
    if( counter>0){

      setCounter(counter-1)
    }
    else{
      alert('Reached minimum count')
    }
  }
  

  return (
    <>
    <div className='counter'>

    <h1 >Counter: {counter}</h1>
    <div className='buttons'>
    <button onClick={addvalue}>add</button> 
    <br />
    <button onClick={reduceval}>reduce</button> 
    </div>
      </div>    
    </>
  )
}

export default App
