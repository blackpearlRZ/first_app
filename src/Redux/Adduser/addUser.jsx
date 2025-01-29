import React, {useState} from "react";
import { AddUser } from "./actionFunction";
import{useDispatch as dispatch} from 'react-redux';
import "./adduser.css"

export default function AddUserForm(){
    const id = Date.now()
    const [name, setName] = useState('')
    const [prenom, setPrenom] = useState('')
    
    const new_user = {
        id : id,
        nom : name,
        prenom : prenom
    }

    function handleAdd(e){
        e.preventDefault()
        dispatch(AddUser(new_user))
    }
    return(
        <div className="form_user">
            <h3>Ajouter User</h3>
            <input type="text" value={name} placeholder="Nom" onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={prenom} placeholder="Prenom" onChange={(e) => setPrenom(e.target.value)}/>
            <button onClick={(e) => handleAdd(e)}>Ajouter</button>
        </div>
    )
}