import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Tracuu from '../pages/Tracuu'
import KetQua from '../pages/KetQua'
import ThongTin from '../pages/ThongTin'

const Routers = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/tracuu" element={<Tracuu />} />
            <Route path="/ketqua" element={<KetQua />} />
            <Route path="/thongtin" element={<ThongTin />} />
        </Routes>
    )
}

export default Routers
