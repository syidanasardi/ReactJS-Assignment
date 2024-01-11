import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="sticky top-0 bg-red-100">
            <p className='text-5xl'>My Notes</p>
            <Link to="/" className='text-3xl absolute top-2 right-1/4'>Home</Link>
            <Link to="/create" className='text-3xl absolute top-2 right-1/3'>Add Note</Link>
        </nav>
    )
}

export default Navbar