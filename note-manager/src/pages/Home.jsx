import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Note({note, handleDelete}) {
    return (
      <div>
        <h1 className='text-xl'>{note['title']}</h1>
        <li>{note['content']}</li>
        <button onClick={handleDelete}>Delete</button>
        <Link to={'/edit/'+note.id}>Edit</Link>
      </div>
    )
}

function Home() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/notes')
    .then(response => {setNotes(response['data'])})
  }, [])

  function handleDeleteOf(id) {
    const url = 'http://localhost:3000/notes/' + id
    axios.delete(url)
    .then(response => console.log(response['data']))

    setNotes(notes.filter(note => note['id'] !== id))
  }


  return (
    <div>
      <h1 className='text-5xl'>Notes</h1>
      <br />
      <ul>
      {notes.map(note => 
          <Note key={note['id']} note={note} handleDelete={() => handleDeleteOf(note['id'])}/>
        )}
      </ul>
    </div>
  )
}

export default Home
