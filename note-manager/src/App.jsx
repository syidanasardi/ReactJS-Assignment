import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Create from './pages/Create.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
    return(
        <Router>
            <div>
                <Navbar/>
                <div>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/create' element={<Create/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App