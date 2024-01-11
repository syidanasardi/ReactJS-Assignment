import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="sticky top-0 bg-red-100 flex flex-row place-content-evenly p-2">
            <p className='text-3xl'>My Notes</p>
            <Link to="/" className='text-3xl'>Home</Link>
            <Link to="/create" className='text-3xl'>Add Note</Link>
        </nav>
    )
}

export default Navbar