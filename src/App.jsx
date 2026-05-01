import { useState } from 'react'
import './App.css'
import LoginPage from './page/LoginPage'
import DetailsPage from './page/DetailsPage'
import Header from './components/Header'

function App() {

  return (
    <>
      <LoginPage/>
      <Header/>
      <DetailsPage/>
    </>
  )
}

export default App
