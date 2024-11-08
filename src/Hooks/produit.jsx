import React, { useState } from "react"

function CardProduct(props){
  return(
    <>
    <tr>
      <th>{props.id}</th>
      <th>{props.designation}</th>
      <th>{props.prix}</th>
      <th><button onClick={() => props.onDelete(props.id)}>Supprimer</button></th>
    </tr>
    </>
  )
}
function Formulaire(){
  const [id,setId] = useState('');
  const [designation,setdesignation] = useState('');
  const [prix,setPrix] = useState();
  const [cardList , setCardList] = useState([])
  function Ajouter(e){
    e.preventDefault()
    if (e.target.form[0].value !== "" && e.target.form[2].value !== "" && e.target.form[1].value !== "" ){
      setId(e.target.form[0].value )
      setdesignation(e.target.form[1].value)
      setPrix(e.target.form[2].value)
      const newProduct = {"id":e.target.form[0].value,"designation": e.target.form[1].value, "prix":e.target.form[2].value}
      setCardList([...cardList, newProduct])
    }
  }
  console.log(cardList)
  function Supprimer(id){
    const newList = cardList.filter((product) => product.id !== id)
    setCardList(newList)
  }
  return(
    <div className="formulaire">
      <form>
        <label htmlFor="id">Id: </label>
        <input type="text" name="id"id="id"/><br />
        <label htmlFor="designation">Designation: </label>
        <input type="text" id='designation' name='designation'/><br />
        <label htmlFor="prix">Prix: </label>
        <input type="text" name='prix' id='prix'/><br />
        <button onClick={Ajouter}>Ajouter</button>
      </form>
      <table border={"2px"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Designation</th>
            <th>Prix</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {cardList.length > 0 ?
            (cardList.map((produit) => (
              <CardProduct
              key = {produit.id}
              id = {produit.id}
              designation = {produit.designation}
              prix = {produit.prix}
              onDelete = {Supprimer}
              />
            )
            ))
            : console.log('hi')
        }   
        </tbody> 
      </table>
    </div>
  )
}

export default Formulaire 