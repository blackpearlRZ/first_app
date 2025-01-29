import React, { useState } from 'react'
import Coordonnees from './Coordonnees'
import Formation from './Formation'
import EnvoyerPhoto from './EnvoyerPhoto'
export default function App() {
  const [nom , setnom] = useState('')
  const [prenom , setprenom] = useState('')
  const [date , setdate] = useState('')
  const [email , setemail] = useState('')
  const [site , setsite] = useState('')
  const [code , setcode] = useState('')
  const [genre , setgenre] = useState('')
  const [pays , setpays] = useState('')
  const [formation , setformation] = useState([])
  const [infos , setinfos] = useState(false)
  
  function submitForm(e){
    e.preventDefault()
    if(nom  ||prenom  || email || formation ){
      setinfos(true)
    }
  }

  return (
    <>
      <form>
        <Coordonnees 
        nom = {nom} setnom={setnom}
        prenom = {prenom} setprenom={setprenom}
        date = {date} setdate={setdate}
        email = {email} setemail={setemail}
        site = {site} setsite={setsite}
        code = {code} setcode={setcode}
        genre = {genre} setgenre={setgenre}
        pays = {pays} setpays={setpays}
        />
        <Formation formation={formation} setformation={setformation}/>
        <EnvoyerPhoto/>
        <button onClick={submitForm}>Ajouter</button>
        {infos ? (
            <ul>
              <h3>Recuperer Infos</h3>
                <li>nom : {nom}</li>
                <li>prenom : {prenom}</li>
                <li>Email : {email}</li>
                <li>formation : 
                  <ul>
                      {formation.map((f , index) => {
                      return(
                        <li key={index}>{f}</li>
                      )
                      })}
                  </ul>
                </li>
            </ul>
            ) : <p>no infos added yet</p>}
      </form>
    </>
  )
}
