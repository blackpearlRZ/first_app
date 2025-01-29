import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='nav_bar'>
        <Link to='/'>Liste des stagiare</Link>
        <Link to='/add'>Ajouter un stagiaire</Link>
    </header>
  )
}
