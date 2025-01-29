import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Addnote() {
    const [nom , setnom] = useState('')
    const [detail , setdetail] = useState('')
    const dispatch = useDispatch()

    function ajouterNote(e){
        e.preventDefault()
        const date = new Date().toLocaleDateString('fr-FR')
        if( nom,detail){
            dispatch({
                type : 'ADD_NOTE',
                payload : {
                    nom,
                    detail,
                    date
                }
            })
        } 
        setnom('')
        setdetail('')
    }
    return (
    <>
    <form>
        <label>Nom de la note : </label>
        <input type="text" value={nom} onChange={(e) =>setnom(e.target.value)} required/>
        <label>Detail note : </label>
        <input type="text" value={detail} onChange={(e) =>setdetail(e.target.value)} required/>
        <button onClick={ajouterNote}>Ajouter Note</button>
    </form>
    </>
  )
}
