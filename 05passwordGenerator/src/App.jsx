import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[length,setLength] = useState(8)
 const[numAllowed,setNumAllowed] = useState(false)
 const[charAllowed,setCharAllowed]= useState(false)

 const [Password,setPassword] = useState("");

 //useRef hook
 const passwordRef = useRef(null)

 const passwordGenerator = useCallback(() => {
  let pass =""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numAllowed) str+="0123456789"
  if(charAllowed) str+="!@#$%^&*([{]}~``])"
  for(let i =0;i<=length;i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPassword(pass)

 },[length,numAllowed,charAllowed,setPassword])

const copyPasswordToClipbord = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999)
  window.navigator.clipboard.writeText(Password)
},[Password])

 useEffect(() => {
  passwordGenerator()
 },[length,numAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md  text-center
    rounded-lg px-4 mx-20 text-orange-500 bg-gray-600'>
      <h1 className='text-white text-center bg-gray-600 mb-5'>Password Generator</h1>
      <div className='flex shadow-rounded-lg overflow-hidden mb-4'>
       <input type="text" value={Password} 
       className='outline-none w-full py-1 px-3 bg-white rounded-md'
       placeholder='password'
       readOnly
       ref={passwordRef}/>
       <button onClick={copyPasswordToClipbord}
       className='outline-none bg-orange-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
       </div>
       <div className='flex text-sm gap-x-2 pb-4'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={4}
          max={100}
          value={length}
          className='cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}}/>
           <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={() =>{
            setNumAllowed((prev) => !prev)
          }} />
          <label htmlFor="numberInput">Numbers</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numAllowed}
          id='characterInput'
          onChange={() =>{
            setCharAllowed((prev) => !prev)
          }} />
          <label htmlFor="numberInput">Characters</label>

        </div>
       </div>

    </div>
    </>
  )
}

export default App
