import axios from 'axios'
import {useState} from 'react'

function Create() {
    const [newNote, setNewNote] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [important, setImportant] = useState(true)

    function addNote(event) {
        event.preventDefault()
        if (newNote !== '' && newTitle !== '') {
          const noteObject = {
            title : newTitle,
            content : newNote,
            important : important
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
        <div  className='place-content-center max-w-[50%] m-auto'>
          <form onSubmit={addNote}>
              <p className='text-3xl py-[30px]'>Input here to add note</p>
              <label htmlFor="titleInput">Title </label><br />
              <input id='titleInput' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='Title' className='border-solid border-black border-2 rounded-lg px-1 w-full'/>
              <br />
              <label htmlFor="noteInput">note </label><br />
              <textarea id='noteInput' value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder='Insert Note' className='border-solid border-black border-2 rounded-lg px-1 w-full'/>
              <br />
              <select value={important} onChange={(e) => setImportant(e.target.value)}>
                <option value={true}>Important</option>
                <option value={false}>Not Important</option>
              </select>
              <br /><br />
              <button type='submit'>save</button>
          </form>
          </div>
    )
}

export default Create