import { useState } from "react";

function Somme (){
    const [num1,setNume1] = useState(0)
    const [num2,setNume2] = useState(0)
    const [somme,setSomme] = useState(0)

    function calculer(e){
        e.preventDefault()
        setSomme(e.target.form[0].value + e.target.form[1].value)
    }
    function annuler(e){
        e.preventDefault()
        setSomme(0)
        setNume1(0)
        setNume2(0)
    }
    return(
        <form action="">
            <label htmlFor="num1">Enter the Number 1 : </label>
            <input type="number" value={num1} id="num1" /><br />
            <label htmlFor="num2">Enter the Number 2 : </label>
            <input type="number" value={num2} id="num2"/>
            <br />
            <button onClick={calculer}>Calculer Somme</button>
            <button onClick={annuler} >Annuler</button><br />
            <input type="text" value={somme} readOnly/>
        </form>
    )
}
export default Somme