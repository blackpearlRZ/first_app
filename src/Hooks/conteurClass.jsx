import { Component } from "react";

class Compteur extends Component{
    constructor(){
        super()
        this.state = ({conteur : 0})
    }
    incrementer  = () =>{
        this.setState({conteur : this.state.conteur + 1 })
    }
    desincrementer = () =>{
        if (this.state.conteur > 0){
            this.setState({conteur : this.state.conteur - 1 })
        }
    }
    render(){
        return(
            <>
            <h2>Composant Compteur</h2>
            <p>Compteur : {this.state.conteur}</p>
            <button onClick={this.incrementer}>Incrementer</button>
            <button onClick={this.desincrementer}>Desincrementer</button>
            </>
        )
    }
    componentDidMount(){
        console.log('Componet didMount called')
        console.log("----------------------")
    }
    componentDidUpdate(){
        console.log('Component didUpdate called')
    }
    componentWillUnmount(){
        console.log('compenent WillUnmount called')
    }
}

export {Compteur}
class AppConteur extends Component{
    constructor(){
        super()
        this.state = {isVisible : false}
    }
    montrer = () =>{
        this.setState({isVisible : true})
    }
    demontrer = () =>{
        this.setState({isVisible : false})
    }
    render(){
        return(
            <>
            <h1>App Compteur</h1>
            <button onClick={this.montrer} disabled={this.state.isVisible}>Montrer</button>
            <button onClick={this.demontrer} disabled={!this.state.isVisible}>Demontrer</button>
            <div>
                {this.state.isVisible ? <Compteur/> : null}
            </div>
            </>
        )
    }
}
export default AppConteur