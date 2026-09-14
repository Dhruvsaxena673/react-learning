import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)
  //let counter=15
 const addValue=()=>{
   // counter=counter+1
    setCounter(counter+1)
    // call back approach
    //setCounter({prevCounter => prevCounter+1})
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }
  return (
  <>
  <h1>Dhruv saxena</h1>
  <h2>Counter value: {counter}</h2>

  <button onClick={addValue}>Add value</button>
  <br/>
  <button onClick={removeValue}>Remove value</button>
  <footer>Display: {counter}</footer>
  </>
  )
}

export default App
