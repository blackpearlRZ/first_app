import React from 'react'
import Header from './components/Header/Header'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import ListStagiaire from './components/stagaire/listStagiaire'
import AddStagiaire from './components/stagaire/addStagiare'
import StagiaireDetails from './components/stagaire/stagiaireDetails'
export default function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<ListStagiaire/>}/>
        <Route path='/add' element={<AddStagiaire/>}/>
        <Route path='/:nom' element={<StagiaireDetails/>}/>
    </Routes>
    </>
  )
}
