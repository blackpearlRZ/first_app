import React from "react";

function Child({sendValueToChild}){
    const handleButton = (e) =>{
        e.preventDefault()
        console.log("hi")
        sendValueToChild(e.target.form[0].value)
    }
    return(
        <form action="">
            <input type="text" placeholder="Entrer une valeur"/>
            <button onClick={handleButton}>Envoyer</button>
        </form>
    )
}

export default Child