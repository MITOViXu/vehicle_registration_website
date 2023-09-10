import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Tracuu from '../pages/Tracuu'
import KetQua from '../pages/KetQua'

const Routers = () => {
    return (<Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/tracuu' element={<Tracuu />} />
        <Route path='/ketqua' element={<KetQua />} />
        
    </Routes>)
}

export default Routers
