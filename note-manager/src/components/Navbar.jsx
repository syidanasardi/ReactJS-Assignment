import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="sticky top-0 bg-red-600 flex flex-row place-content-evenly p-2 z-50">
            <p className='text-3xl'>My Notes</p>
            <div className='space-x-8'>
                <Link to="/" className='text-3xl'>Home</Link>
                <Link to="/create" className='text-3xl'>Add Note</Link>
            </div>
        </nav>
    )
}

export default Navbar