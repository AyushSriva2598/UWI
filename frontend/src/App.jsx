import React from 'react'
import InputForm from './pages/InputForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/form' element={<InputForm />} />
      </Routes>
    </BrowserRouter>
  )
}

