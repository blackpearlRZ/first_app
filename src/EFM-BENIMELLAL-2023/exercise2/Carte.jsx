import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Carte({props}) {
    const likes = useSelector(state)
    const dispatch = useDispatch()
    function addlike(){
        dispatch({
            type : 'ADD_LIKE',
            payload : state + 1
        })
    }
  return (
    <div>
        <img src={props.poster} alt="LIVRE_POSTER"/>
        <h3>{props.titre}</h3>
        <h6>Auteur : {props.auteur}</h6>
        <h6>edition : {props.edition}</h6>
        <button onClick={addlike}>Like{likes}</button>
    </div>
  )
}
