import { useState } from "react"

function Inscription(){
    const [name,setName] = useState('')
    const [prenom,setPrenom] = useState('')
    function Afficher(e){
        e.preventDefault()
    }
    return(
        <>
            <h3>Inscription</h3>
            <form onSubmit={Afficher}>
                <label>Nom: </label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                /><br />
                <label>Prenom: </label>
                <input 
                    type="text" 
                    value={prenom} 
                    onChange={(e) => setPrenom(e.target.value)} 
                /><br />
                <button type="submit">Afficher</button>
            </form>
            <p>Name: {name}, Prenom: {prenom}</p>
        </>
    )
}
export default Inscription