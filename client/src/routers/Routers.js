import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Tracuu from '../pages/Tracuu'

const Routers = () => {
    return (<Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/tracuu' element={<Tracuu />} />
    </Routes>)
}

export default Routers
