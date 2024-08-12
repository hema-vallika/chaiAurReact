import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter] = useState(15)

 // let counter = 5;
  const addvalue = () => {
   if(counter >= 20){
    setCounter(counter =0)
   }
   else{
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)

    setCounter((prevCounter) => prevCounter + 1)

    // setCounter(counter +1)
    
    // setCounter(counter +1)
    // setCounter(counter +1)
    // setCounter(counter +1)

   }
     
  }
  const removeValue= () =>{
    if(counter <= 0){
      setCounter(counter = 20 )
    }
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Add Value {counter}</button>
      <br></br>
      <br></br>
      <button onClick={removeValue}>Remove Value {counter}</button>
    
    </>
  )
}

export default App
