import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Edit() {
    const {id} = useParams()
    const [newNote, setNewNote] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [important, setImportant] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:3000/notes/' + id)
        .then(response => {
            setNewTitle(response.data.title)
            setNewNote(response.data.content)
            setImportant(response.data.important)
        })
      }, [])

    function editNote(event) {
        event.preventDefault()
        if (newNote !== '' && newTitle !== '') {
          const noteObject = {
            title : newTitle,
            content : newNote,
            important : important
          }
    
          axios.put('http://localhost:3000/notes/' + id, noteObject)
        }
        else {
          alert('invalid input')
        }
      }

    return (
        <div className='place-content-center max-w-[50%] m-auto'>
          <form onSubmit={editNote}>
              <p className='text-3xl py-[30px]'>Input here to add note</p>
              <label htmlFor="titleInput">Title </label><br />
              <input id='titleInput' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='Title' className='border-solid border-black border-2 rounded-lg px-1 w-full'/>
              <br />
              <label htmlFor="noteInput">note </label><br />
              <textarea id='noteInput' value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder='Insert Note' className='border-solid border-black border-2 rounded-lg px-1 w-full h-4/5'/>
              <br />
              <label htmlFor="importance">Importance: </label>
              <select id='importance' value={important} onChange={(e) => setImportant(e.target.value)}>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value="high">High</option>
              </select>
              <br /><br />
              <button type='submit'>save</button>
          </form>
        </div>
    )
}

export default Edit