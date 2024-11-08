import { useState } from "react"

function Inscrire(){
    const [formData, setFormData] = useState({
        name: '',
        naiss : '',
        ville : '',
        genre : '',
        loisir : []
    })
    const [affichage , setAffichage] = useState(false)
    function Afficher(e){
        e.preventDefault()
        const loisir = []
        if (e.target[7].checked) {
            loisir.push(e.target[7].value)
        }
        if (e.target[8].checked) {
            loisir.push(e.target[8].value)
        }
        if (e.target[9].checked) {
            loisir.push(e.target[9].value)
        }
        setFormData({
            name: e.target[0].value,
            naiss : e.target[2].value,
            ville : e.target[3].value,
            genre : e.target[4].value,
            loisir : loisir
        })
        if (loisir.length > 0){
            setAffichage(true)
        }
    }
    return(
        <>
        <form onSubmit={Afficher}>
            <label>L'identifiant <input type="text" /></label>
            <label>Mot de passe <input type="password" /></label>  
            <label>Date de naissance <input type="date" /></label>
            <label>Ville
            <select id="city" name="city">
                    <option value="casablanca">Casablanca</option>
                    <option value="rabat">Rabat</option>
                    <option value="marrakech">Marrakech</option>
                    <option value="fes">Fès</option>
            </select>
            </label>
            <label>Genre :  
                <input type="radio" name="genre" value="homme"/>
                <label htmlFor="homme">Homme</label>
                <input type="radio" name="genre" value="femme"/>
                <label htmlFor="femme">Femme</label>
            </label>
            <label>Loisirs : 
                <input type="checkbox" name='hobbies' value="lecture"/>
                <label htmlFor="lecture">Lecture</label>
                <input type="checkbox" name='hobbies' value="sport"/>
                <label htmlFor="sport">Sport</label>
                <input type="checkbox" name='hobbies' value="musique"/>
                <label htmlFor="musique">Musique</label>
            </label>
            <label>Photo :
                <input type="file"/>
            </label>
            <button >S'inscrire</button>
        </form>
        {affichage ? 
        <p>Je suis {formData.name} né le {formData.naiss} a {formData.ville} et mes loisis sont: <br /> {formData.loisir.map(l => <>{l}<br /></>  )}</p> : ""
        }
        </>
    )
}
export default Inscrire