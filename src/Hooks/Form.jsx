import React,{useState} from "react";

function Formulaire(){
    const [name,setName] = useState('');
    const [prenom,setPrenom] = useState('');
    const [age,setAge] = useState(0);
    function Afficher(e){
        e.preventDefault()
        console.log(e.target[0])
        setName(e.target[0].value)
        setPrenom(e.target[1].value)
        setAge(e.target[2].value)
    }
    return(
        <div className="formulaire">
            <form action="">
                <label htmlFor="name">Name : </label>
                <input type="text"/><br />
                <label htmlFor="prenom">Prenom : </label>
                <input type="text"/><br />
                <label htmlFor="age">Age : </label>
                <input type="text"/><br />
                <button onClick={Afficher} >Afficher</button>
            </form><br />
            <h3>Name: {name}<br />Prenom: {prenom} <br />Age:{age}</h3>
        </div>
    )
}

export default Formulaire