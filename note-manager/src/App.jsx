import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function Note({note, handleDelete}) {
    return (
      <div>
        <li>{note['content']}</li>
        <button onClick={handleDelete}>Delete</button>
      </div>
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
    if (newNote !== '') {
      const noteObject = {
        content : newNote
      }

      axios.post('http://localhost:3000/notes', noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
    }
  }

  function handleInputChange(event) {
    setNewNote(event.target.value)
  }

  function handleDeleteOf(id) {
    const url = 'http://localhost:3000/notes/' + id
    axios.delete(url)
    .then(response => console.log(response['data']))

    setNotes(notes.filter(note => note['id'] !== id))
  }


  return (
    <div>
      <h1 className='text-5xl'>Notes</h1>
      <ul className='text-left'>
      {notes.map(note => 
          <Note key={note['id']} note={note} handleDelete={() => handleDeleteOf(note['id'])}/>
        )}
      </ul>
      <form onSubmit={addNote} className='text-left'>
        <br />
        <p>Input here to add note</p>
        <input value={newNote} onChange={handleInputChange} className='border-solid border-black border-2 rounded-lg px-1'/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App
