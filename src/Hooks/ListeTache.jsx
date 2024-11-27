import { useState } from "react"

function ListeTache(){
    const[list,setListe] = useState([])
    const [mode, setMode] = useState("En Cours ...")
    const [isExperee, setIsExperee] = useState(false)
    const[isDone, setIsDone] = useState(false)
    function afficher(e){
        e.preventDefault()
        const tache = e.target.form[0].value
        if (tache) {
            setListe([...list,tache])
        }
        console.log(list)
        setTimeout(() =>{
            if(!isDone){
                setMode("Expiree")
                setIsExperee(true)
            }
    },10000)
    }
    function changeM(){
        setMode('Done')
        setIsExperee(true)
        setIsDone(true)
    }
return(
    <>
    <h1>Gestionnaire de liste des taches</h1>
    <form action="">
        <input type="text" />
        <button onClick={afficher}>Ajouter</button>
    </form>
    <div>
        <ul>
        {list.map((l,index) =>
        <li key={index}>{l}[{mode}]{!isExperee ? 
            (<button onClick={changeM}>Done</button>):null
        }
        </li>)}
        </ul>
    </div>
    </>
)
}
export default ListeTache