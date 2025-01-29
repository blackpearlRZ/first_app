import React from 'react'
import { useSelector } from 'react-redux'
export default function Listnote() {
    const notes = useSelector(state => state.notes)
    console.log(notes)
  return(
    <>
    <ul>
        {notes.map((note,index) => (
          <li key={index}>
            Note{index+1} : {note.nom} / Details : {note.detail} dans le {note.date}
          </li>
        ))}
    </ul>
    </>
  )
}
