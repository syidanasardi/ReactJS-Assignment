import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Edit() {
    const {id} = useParams()
    const [newNote, setNewNote] = useState('')
    const [newTitle, setNewTitle] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/notes/' + id)
        .then(response => {
            setNewTitle(response.data.title)
            setNewNote(response.data.content)
        })
      }, [])

    function editNote(event) {
        event.preventDefault()
        if (newNote !== '' && newTitle !== '') {
          const noteObject = {
            title : newTitle,
            content : newNote
          }
    
          axios.put('http://localhost:3000/notes/' + id, noteObject)
        }
        else {
          alert('invalid input')
        }
      }

    return (
        <div  className='place-content-center max-w-[50%] m-auto'>
          <form onSubmit={editNote}>
              <p className='text-3xl py-[30px]'>Input here to add note</p>
              <label htmlFor="titleInput">Title </label><br />
              <input id='titleInput' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='Title' className='border-solid border-black border-2 rounded-lg px-1 w-full'/>
              <br />
              <label htmlFor="noteInput">note </label><br />
              <textarea id='noteInput' value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder='Insert Note' className='border-solid border-black border-2 rounded-lg px-1 w-full h-4/5'/>
              <br />
              <select>
                <option value={true}>Important</option>
                <option value={false}>Not Important</option>
              </select>
              <br /><br />
              <button type='submit'>save</button>
          </form>
        </div>
    )
}

export default Edit