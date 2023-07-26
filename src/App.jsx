import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //UseEffect will render each time.
  useEffect(()=>
  {
    document.title= `Chats(${count})`;
  })

  //To limit this we just add an array dependency

  // useEffect(()=>
  // {
  //   console.log("hello world");
  // },[])

  return (
    <>
    <div className='heading'>INCREEMENT AND DECREEMENT BUTTONS</div>
    <h1 align='center' className='count'>{count}</h1>
      
      <div className='container'>
        <button className="shattering-button" onClick={()=> setCount(count+1)}>INCR</button>
        <button className="shattering-button" onClick={()=> setCount(count-1)}>DECR</button>
      </div>
    </>
  )
}

export default App
