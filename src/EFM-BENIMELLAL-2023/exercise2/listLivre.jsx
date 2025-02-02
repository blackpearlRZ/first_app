import React from 'react'
import { livres } from './livres'
import Carte from './Carte'
export default function ListLivre() {
  return (
    <div>
        {livres.map((livre, index) =>(
            <Carte key={index} props={livre}/>
        ))}
    </div>
  )
}
