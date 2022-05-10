import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './index.css'
import 'antd/dist/antd.css'

import { authStore } from './stores/auth'
import Main          from './pages/main'
import Notfound      from './pages/notfound'
import Auth          from './pages/auth'
import Sandwich      from './pages/sandwich'

function App () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Auth/>}/>
                <Route path="/register" element={<Auth/>}/>
                <Route path="/sandwich/:channel" element={<Sandwich/>} />


                <Route path="*" element={<Notfound/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
