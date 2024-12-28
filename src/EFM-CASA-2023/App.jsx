import React, { useState } from "react";
import { use } from "react";
import {v4 as uuidv4} from 'uuid'

function App(){
    const [listStg , setListStg] = useState([])
    const [error, setError] = useState('')
    const id = Date.now()
    const [formData , setFormData] = useState({
        id : id,
        matricule : '',
        nom : '',
        ville : '',
        codePostal : '',
        moyenne : 0
    })
    function ajouter(e){
        e.preventDefault()
        console.log(listStg.find(s => s.matricule == e.target.form[1].value))
        if (listStg.find(s => s.matricule == formData.matricule)){
            return(setError('Matricule deja existante'))
        } else if( formData.moyenne < 0 || formData.moyenne> 20){
            return(setError ((prevText) => prevText + " moyenne doit etre entre 0 et 20"))
        }else {
            setFormData({  
                id : id,
                matricule : formData.matricule,
                nom : formData.nom,
                ville :formData.ville,
                codePostal : formData.codePostal,
                moyenne : formData.moyenne
            })
        }
        setListStg([...listStg, formData])
        setError('')
    }
    console.log(listStg)
    return(
        <>
        <div className="list-affichage">
            <h1>Listes des stagiaires</h1>
        </div>
        <div className="formulaire">
            <form>
                <label>ID : <input type="text" readOnly value={id} /></label>
                <label>marticule : <input type="text" required value={formData.matricule}  onChange={e => (setFormData({...formData, matricule : e.target.value}))} /></label>
                <label>Nom : <input type="text" required value={formData.nom}  onChange={e => (setFormData({...formData, nom : e.target.value}))} /></label>
                <label>Ville : <input type="text" required value={formData.ville}  onChange={e => (setFormData({...formData, ville : e.target.value}))}/></label>
                <label>CodePostal : <input type="number" required value={formData.codePostal}  onChange={e => (setFormData({...formData, codePostal : e.target.value}))}/></label>
                <label>Moyenne : <input type="number" required value={formData.moyenne}  onChange={e => (setFormData({...formData, moyenne : e.target.value}))}/></label>
                <div>
                    <button onClick={ajouter}>Ajouter</button>
                    <button>Filtrer ville et nom</button>
                    <button>Vider</button>
                    <button>Initialiser recherche</button>
                </div>
            </form>
            <h4 style={{color : 'red'}}>{error}</h4>
        </div>
        <div className="results">
            <p>La moyenne generale la plus elevee : </p>
            <p>La moyenne generale la moins elevee : </p>
            <p>La moyenne generale de la classe :  </p>
        </div>
        </>
    )
}
export default App