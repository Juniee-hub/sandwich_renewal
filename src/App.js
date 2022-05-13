import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './index.css'
import 'antd/dist/antd.css'

import { authStore } from './stores/auth'
import Main          from './pages/main'
import Notfound      from './pages/notfound'
import Auth          from './pages/auth'
import Sandwich      from './pages/sandwich'

import { nanoid } from 'nanoid'

function App () {

    // Todo 중첩 라우팅, 중복 라우팅 최적화 필요
    // Todo Router 에서 Param 타입 체크 가능한지 확인 필요
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Auth/>}/>
                <Route path="/register" element={<Auth/>}/>

                <Route path="/sandwich/:channel" element={<Sandwich key={nanoid()} />}/>
                <Route path="/sandwich/:channel/bookmark" element={<Sandwich key={nanoid()} />}/>
                <Route path="/sandwich/:channel/project/:project" element={<Sandwich key={nanoid()} />}/>
                <Route path="/sandwich/:channel/setting" element={<Sandwich key={nanoid()} />}/>


                <Route path="*" element={<Notfound/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
