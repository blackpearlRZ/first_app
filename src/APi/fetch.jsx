import axios from "axios"
import { useEffect, useState } from "react"

function Fetch (){
    const [utilisateur,setUtilisateur]=useState([])
    useEffect(()=>{
    const getData= async ()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    const users=await response.json()
    setUtilisateur(users)
    }
    getData()
    },[])
    return(
        <div>
            <h1>Nombre d'utilisateur :{utilisateur.length} </h1><br />
            <ul>
            {utilisateur.map(user =>
                <>
                    <li>{user.name}</li>
                    <li>{user.username}</li>
                    <li>{user.phone}</li>
                    <br />
                </>)}
            </ul>
        </div>
    )
}
export default Fetch