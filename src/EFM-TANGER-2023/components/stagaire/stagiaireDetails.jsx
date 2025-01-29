import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function StagiaireDetails() {
    const {nom} = useParams()
    const stags = useSelector(state => state.stagiaires)
    console.log(stags)
    const stag = stags.find(s => s.nom === nom)
    console.log(stag)

    if(!stag){
        return <h2>Stagiaire not found</h2>
    }

    return (
        <div>
            <h4>{stag.nom}{stag.prenom}</h4>
            <h5>{stag.filiere}</h5>
        </div>
    )
}
