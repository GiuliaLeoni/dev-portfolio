import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Info } from './components/Info/Info'
import { Main } from './components/Main/Main'

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Main />}/>
        </Route>
    </Routes>
    </>
  )
}

export default App
