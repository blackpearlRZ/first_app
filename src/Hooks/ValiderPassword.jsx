import { useState } from "react"

function ValiderPwd(){
    const [password , setPassword] = useState('')

    return(
        <>
        <label htmlFor="pwd">Enter votre password : </label>
        <input type="password"onChange={(e) => setPassword(e.target.value)}/>
        <div>
        {password.length < 4 ? <p style={{color : "red"}}>Password doit avoir au moins 4 caractere</p> :
        <p style={{color : 'green'}}>Password Valide</p>
         }
         </div>
        </>
    )
}


// /same en utilisant class Component

/*import { Component } from "react"
class ValiderPwd extends Component{
    constructor(){
        super()
        this.state = {password : ''}
    }
    render(){
        return(
            <div>
                <label>Enter votre password : </label>
                <input type="password" value={this.state.password} onChange={(e) => this.setState({password:e.target.value})}/>
                <div>{this.state.password.length < 4 ? <p style={{color : "red"}}>Password doit avoir au moins 4 caractere</p> :
                    <p style={{color : 'green'}}>Password Valide</p>
                }</div>
            </div>
        )
    }
}*/
export default ValiderPwd