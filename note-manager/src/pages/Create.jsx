import axios from 'axios'
import {useState} from 'react'

function Create() {
    const [newNote, setNewNote] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [important, setImportant] = useState('low')

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
              <label htmlFor="importance">Importance: </label>
              <select id='importance' value={important} onChange={(e) => setImportant(e.target.value)}>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value="high">High</option>
              </select>
              <br /><br />
              <button type='submit' className='text-red-700 border-solid rounded-xl border-red-700 border-2 p-2 hover:bg-red-700 hover:text-white'>Add Note</button>
          </form>
          </div>
    )
}

export default Create