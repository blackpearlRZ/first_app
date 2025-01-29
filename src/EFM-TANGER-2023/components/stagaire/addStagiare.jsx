import { useState } from "react"
import { useDispatch } from "react-redux"
export default function AddStagiare() {
    const [image,setimage] = useState("")
    const [nom,setnom] = useState("")
    const [prenom,setprenom] = useState("")
    const [filiere,setfiliere] = useState("")
    const dispatch = useDispatch()
    function addStagaire(e){
        e.preventDefault()
        if(image,nom,prenom,filiere){
            dispatch({
                type : 'ADD_STAGIAIRE',
                payload : {
                    image,
                    nom,
                    prenom,
                    filiere
                }
            })
        }
        setimage('')
        setfiliere('')
        setnom('')
        setprenom('')
    }
    return (
        <>
        <form style={{display : 'flex' , flexDirection : "column", width : 'fit-content' , gap : "1rem"}}>
            <input type="file" accept="image/*" placeholder="saisir le lien de l'image" value={image} onChange={(e)=> setimage(e.target.value)} required/>
            <input type="text" placeholder='saisir le nom'  value={nom} onChange={(e)=> setnom(e.target.value)} required />
            <input type="text" placeholder='saisir le prenom'  value={prenom} onChange={(e)=> setprenom(e.target.value)} required />
            <input type="text" placeholder='saisir le filiere'  value={filiere} onChange={(e)=> setfiliere(e.target.value)}required/>
            <button onClick={addStagaire}>Ajouter</button>
        </form>
        </>
    )
}
