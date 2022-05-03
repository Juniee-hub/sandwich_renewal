import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './index.css'
import 'antd/dist/antd.css';
import Main          from './pages/main'
import { authStore } from './states/auth'
import Notfound      from './pages/notfound'
import Auth          from './pages/auth'

function App () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Auth/>}/>
                <Route path="/register" element={<Auth/>}/>


                <Route path="*" element={<Notfound/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
