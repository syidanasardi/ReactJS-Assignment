import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Note({note, handleDelete}) {
    return (
      <div className='my-5 space-y-2 p-4 border-4 rounded-xl border-red-700'>
        <h1 className='text-3xl text-left'>{note['title']}</h1>
        <p className='text-justify'>{note['content']}</p><br />
        <p className='text-justify'>importance: {note['important']}</p>
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
  const [notesToShow, setNotesToShow] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/notes')
    .then(response => {
      setNotes(response['data'])
      setNotesToShow(response['data'])
    })
  }, [])

  function handleDeleteOf(id) {
    const url = 'http://localhost:3000/notes/' + id
    axios.delete(url)
    .then(response => console.log(response['data']))

    setNotes(notes.filter(note => note['id'] !== id))
  }

  function handleAllButton() {
    setNotesToShow(notes)
  }

  function handleLowButton() {
    setNotesToShow(notes.filter(n => n.important === 'low'))
  }

  function handleMediumButton() {
    setNotesToShow(notes.filter(n => n.important === 'medium'))
  }

  function handleHighButton() {
    setNotesToShow(notes.filter(n => n.important === 'high'))
  }


  return (
    <div>
      <h1 className='text-5xl text-center m-4'>Notes</h1><br />
      <div className='text-center space-x-36 text-2xl'>
        <button onClick={handleAllButton}>All</button>
        <button onClick={handleLowButton}>Low</button>
        <button onClick={handleMediumButton}>Medium</button>
        <button onClick={handleHighButton}>High</button>
        </div>
      <br />
      <div className='text-center max-w-[50%] m-auto space-y-11'>
      {notesToShow.map(note => 
          <Note key={note['id']} note={note} handleDelete={() => handleDeleteOf(note['id'])}/>
        )}
      </div>
    </div>
  )
}

export default Home
