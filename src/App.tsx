import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Info } from './components/Info/Info'


function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />}/>
        </Route>
    </Routes>
    </>
  )
}

export default App
