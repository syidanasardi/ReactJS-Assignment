function Navbar() {
    return (
        <nav className="sticky top-0 bg-red-100">
            <p className='text-5xl'>My Notes</p>
            <a href="/"><button className='text-3xl absolute top-2 right-1/4'>Home</button></a>
            <a href="/create"><button className='text-3xl absolute top-2 right-1/3'>Add Note</button></a>
        </nav>
    )
}

export default Navbar