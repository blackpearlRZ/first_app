import React from 'react'
export default class Inscription extends React.Component {
    constructor()
    {
        super()
        this.state={message:"Bienvenue cher visiteur",btnMessage:"Inscription"}
        // initialisation du state dans un composant de type classe
    }
    inscription()
    {
        this.setState({message:"votre inscription est effectueée",btnMessage:"merci"})
        // la modification du state this.state.message="aaaa" impossible  
    }
    render()
    {
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.inscription()}>{this.state.btnMessage}</button>
            </div>
        )
    }
}