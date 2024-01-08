import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function Notes({notes, toggleImportance}) {
  <div>
    <p>{notes}</p>
  </div>
}

function App() {
  const [count, setCount] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [notes, setNotes] = useState()



  return (
    <>
      <h1 className='text-5xl'>Hello World</h1>
      

    </>
  )
}

export default App
