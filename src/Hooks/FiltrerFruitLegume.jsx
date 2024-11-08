import { useState } from "react"

function Rechercher(){
    const Liste=[ {nom:"banane",type:"fruit"},
        {nom:"orange",type:"fruit"}, {nom:"pomme",type:"fruit"},
        {nom:"raisins",type:"fruit"}, {nom:"kiwi",type:"fruit"},
        {nom:"tomate",type:"legume"}, {nom:"carotte",type:"legume"},
        {nom:"pomme de terre",type:"legume"}, {nom:"navet",type:"legume"},
        {nom:"poivron",type:"legume"}]
     const [type,setType] = useState('')
     const [result,setResult] = useState([])

    function Afficher(){
        return(
            <ul>
                {result.map(f =><li>{f.nom}</li>)}
            </ul>
        )
    } 
    function Chercher(e){
        e.preventDefault()
        setResult(Liste.filter(f => f.type == type))
    }
    return(
        <>
        <form onSubmit={e => Chercher(e)}>
            <h3>Entrer le mot cle de recherche</h3>
            <input type="text" onChange={(e) => setType(e.target.value) } />
            <h4>Type: {type}</h4>
            <h4>Result : </h4>
            <Afficher/>
        </form>
        </>
    )
}

export default Rechercher