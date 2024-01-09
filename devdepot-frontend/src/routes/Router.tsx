import React, { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Details from '../pages/Details'
import Attributes from '../pages/Attributes'
import RegisteringUserContext from '../contexts/RegisteringUserContext'



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <RegisteringUserContext>
                    <Route path='/signup/details' element={<Details/>}></Route>
                    <Route path='/signup/attributes' element={<Attributes/>}></Route>
                </RegisteringUserContext>
            </Routes>
        </BrowserRouter>
    )
}
