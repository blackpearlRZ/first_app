import { useState } from "react"

function Connexion(){
    const [usr,setUsr] = useState('')
    const [messageError , setMessageError] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const database = [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" },
        { username: "user3", password: "pass3" },
        { username: "user4", password: "pass4" },
        { username: "user5", password: "pass5" },
        { username: "user6", password: "pass6" }
      ];
    const errors = {
        uName : 'Votre identifiant est incorrect.',
        uPass : 'Votre mot de passe est incorrect.'
    }
    function handleError(name){
        return (
            name === messageError.name && (
                <div>{messageError.message}</div>
            )
        )
    }
    function connecter(e){
        e.preventDefault()
        const [uName, uPass] = e.target
        setUsr(uName.value)
        const userData = database.find(u => u.username == uName.value)
        if (userData){
           if(userData.password !== uPass.value){
            setMessageError({name : 'uPass', message : errors.uPass})
           }else{
            setIsSubmitted(true)
           }
        }else{
            setMessageError({name : 'uName', message : errors.uName})
        }
    }

    const app = (
        <form onSubmit={connecter}>
            <h2>Connexion</h2>
                <div>
                    <label>L'identifiant </label>
                    <input type="text" required/>
                    <p style={{color : 'red'}}>{handleError('uName')}</p><br />
                    <label>Mot de passe</label>
                    <input type="password" required/>
                    <p style={{color : 'red'}}>{handleError('uPass')}</p>
                </div>
            <button>Se Connecter</button>
        </form>
    )
    return(
        <div>
            {isSubmitted ?
            <div>
                <h1>Acceuil</h1><br />
                <h4>Bonjour {usr}</h4>
            </div>
            :app
            }
        </div>
    )
}

export default Connexion