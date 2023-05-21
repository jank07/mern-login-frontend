import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" exact Component={Login}></Route>
                <Route path="/register" exact Component={Register}></Route>
            </Routes>
        </BrowserRouter>
    </div>
}

export default App