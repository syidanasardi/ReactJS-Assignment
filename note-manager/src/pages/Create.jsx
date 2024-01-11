import axios from 'axios'
import {useState} from 'react'

function Create() {
    const [newNote, setNewNote] = useState('')
    const [newTitle, setNewTitle] = useState('')

    function addNote(event) {
        event.preventDefault()
        if (newNote !== '' && newTitle !== '') {
          const noteObject = {
            title : newTitle,
            content : newNote
          }
    
          axios.post('http://localhost:3000/notes', noteObject)
          .then(response => {
            setNewTitle('')
            setNewNote('')
          })
        }
        else {
          alert('invalid input')
        }
      }

    return (
        <form onSubmit={addNote}>
            <p>Input here to add note</p>
            <label htmlFor="titleInput">Title </label>
            <input id='titleInput' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className='border-solid border-black border-2 rounded-lg px-1'/>
            <br />
            <label htmlFor="noteInput">note </label>
            <input id='noteInput' value={newNote} onChange={(e) => setNewNote(e.target.value)} className='border-solid border-black border-2 rounded-lg px-1'/>
            <br />
            <button type='submit'>save</button>
        </form>
    )
}

export default Create