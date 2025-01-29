import React from 'react'
import { useSelector } from 'react-redux'
import Stagiaire from './stagiaire'
import './listStagiaire.css'
export default function ListStagiaire() {
    const stagiaires = useSelector(state => state.stagiaires)
    console.log(stagiaires)
    return (
    <div className='stagiaire_container'>
        {stagiaires.map((stag,index) => {
            return (
                <div key={index}>
                    <Stagiaire props={stag}/>
                </div>
            )
        })}
    </div>
    )
}
