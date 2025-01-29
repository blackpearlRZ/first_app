import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function AddForm() {
    const dispatch = useDispatch()
    const [nom , setNom] = useState('')
    const [prenom , setPrenom] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        const user = {
            id : Date.now(),
            nom : nom,
            prenom : prenom
        }
        dispatch({
            type : 'ADD_USER',
            payload : user
        })
    }
  return (
    <div className="form_user">
            <form onSubmit={handleSubmit}>
                <h2>Ajouter User</h2>
                <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value) } required/>
                <input type="text" placeholder="Prenom" value={prenom} onChange={(e) => setPrenom(e.target.value) }  required/>
                <button type='submit'>Ajouter</button>
            </form>
    </div>
  )
}
