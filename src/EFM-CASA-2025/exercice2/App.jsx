import React from 'react'
import Addnote from './Addnote'
import Listnote from './Listnote'
export default function App() {
  return (
    <>
    <fieldset style={{width : 'fit-content'}}>
        <Addnote/>
        <Listnote/>
    </fieldset>
    </>
  )
}
