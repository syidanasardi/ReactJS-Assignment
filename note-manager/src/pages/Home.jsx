import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Note({note, handleDelete}) {
    return (
      <div className='my-5 space-y-2 p-4 border-4 rounded-xl border-red-700'>
        <h1 className='text-3xl text-left'>{note['title']}</h1>
        <p className='text-justify'>{note['content']}</p><br />
        <div className='space-x-[80%]'>
          <button onClick={handleDelete} className='text-red-700 border-solid rounded-xl border-red-700 border-2 p-2 hover:bg-red-700 hover:text-white'>Delete</button>
          <Link to={'/edit/'+note.id} className='text-red-700 border-solid rounded-xl border-red-700 border-2 p-2 hover:bg-red-700 hover:text-white'>Edit</Link>
        </div>
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
      <h1 className='text-5xl relative top-6 left-6'>Notes</h1>
      <br />
      <div className='text-center max-w-[50%] m-auto space-y-11'>
      {notes.map(note => 
          <Note key={note['id']} note={note} handleDelete={() => handleDeleteOf(note['id'])}/>
        )}
      </div>
    </div>
  )
}

export default Home
