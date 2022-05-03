import React    from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
// import AuthService from './service/auth'
// import HttpClient  from './network/http'

import reportWebVitals from './reportWebVitals'

const baseURL = process.env.REACT_APP_BASE_URL || 'localhost:8080'
// const httpClient = new HttpClient(baseURL)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
