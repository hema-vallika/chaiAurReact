import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"hema",
    age:18
  }
  return (
    <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
    <Card username="Kiran" btnText = 'click me' ></Card>
    <Card username="Hema" btnText='visit me'></Card>
    </>
  )
}

export default App
