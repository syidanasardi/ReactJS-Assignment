import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function Note({note}) {
    return (
      <li>{note['content']}</li>
    )
}

function App() {
  const [showAll, setShowAll] = useState(true)
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/notes')
    .then(response => {setNotes(response['data'])})
  }, [])

  function addNote(event) {
    event.preventDefault()
    const noteObject = {
      id : notes.length + 1,
      content : newNote
    }

    axios.post('http://localhost:3000/notes', noteObject)
    .then(response => {
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
  }

  function handleFormCHange(event) {
    setNewNote(event.target.value)
  }


  return (
    <div>
      <h1 className='text-5xl'>Notes</h1>
      <ul className='text-left'>
      {notes.map(note => 
          <Note key={note['id']} note={note} />
        )}
      </ul>
      <form onSubmit={addNote} className='text-left'>
        <input value={newNote} onChange={handleFormCHange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App
