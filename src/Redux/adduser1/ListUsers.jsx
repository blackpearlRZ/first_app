import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { UPDATE_USER } from '../Adduser/userAction'

function User({user}){
    const [input , setInput] = useState('')
    const dispatch = useDispatch()
    function handleUpdate(id){
        if(input){
            dispatch({
                type : "UPDATE_USER",
                payload : {
                    id : id,
                    nom : input
                }
            })
        }
    }
    function handleDelete(id){
        dispatch({
            type : 'DELETE_USER',
            payload : id
        })
    }
    return(
        <div>
                <h2>{user.nom} {user.prenom}</h2>
                <div>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} required />
                    <button onClick={() => handleUpdate(user.id)} >Modifier Nom</button>
                    <button onClick={() => handleDelete(user.id)}>Supprimer</button>
                </div>
        </div>
    )
}

export default function ListUsers() {
    const users = useSelector(state => state.users)
  return (
    <div>
        {users.map(user => (
            <User key={user.id} user={user}/>
        ))}
    </div>
  )
}
