import React from "react";
import { DeleteUser, UpdateUser } from "./actionFunction";
import { useDispatch as dispatch ,useSelector } from "react-redux";
import "./listUser.css"

export default function ListUser(){
    const statedata = useSelector(state => state)
    return(
        <>
        <div className="user_list">
        {statedata.map(user => (
            <div key={user.id} className="user_item">
                <h1>{user.nom}  {user.prenom}</h1>
                <div>
                    <input type="text"/>
                    <button onClick={() => dispatch(UpdateUser)}>Modifier</button>
                    <button onClick={() => dispatch(DeleteUser)}>Supprimer</button>
                </div>
            </div>
        ))}
        </div>
        </>
    )
}