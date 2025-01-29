import React from 'react'

export default function Coordonnees({nom, setnom , prenom,setprenom,date,setdate,email,setemail,site,setsite,code,setcode,genre,setgenre,pays,setpays}) {
  return (
    <>
    <fieldset style={{width : 'fit-content'}}> 
        <legend>Vos Coordonnees</legend>
        <form style={{display : 'flex' , flexDirection : "column"}}>
            <label>Nom : <input type="text"  placeholder='votre nom' value={nom} onChange={(e) => setnom(e.target.value)}/></label>
            <label>Prenom : <input type="text"  placeholder='votre prenom' value={prenom} onChange={(e) => setprenom(e.target.value)}/></label>
            <label>Date de naissance : <input type="date"  placeholder='votre date de naissance' value={date} onChange={(e) => setdate(e.target.value)}/></label>
            <label>Email : <input type="email"  placeholder='votre email' value={email} onChange={(e) => setemail(e.target.value)}/></label>
            <label>Votre site : <input type='text'  placeholder='votre site' value={site} onChange={(e) => setsite(e.target.value)}/></label>
            <label>Code : <input type="text"  placeholder='votre code' value={code} onChange={(e) => setcode(e.target.value)}/></label>
            <label>Genre : 
                <input type="radio" name='genre' value={genre} onChange={(e) => setgenre(e.target.value)}/>Femme
                <input type="radio" name='genre' value={genre} onChange={(e) => setgenre(e.target.value)}/>Homme
            </label>
            <label>Pays : 
                <select value={pays} onChange={(e) => setpays(e.target.value)}>
                <optgroup label="Afrique">
                    <option value="tunis">Tunis</option>
                    <option value="algerie">Algérie</option>
                    <option value="maroc">Maroc</option>
                    <option value="mauritanie">Mauritanie</option>
                </optgroup>
                <optgroup label="Europe">
                    <option value="france">France</option>
                    <option value="belgique">Belgique</option>
                    <option value="italie">Italie</option>
                    <option value="allemagne">Allemagne</option>
                </optgroup>
                <optgroup label="Amérique">
                    <option value="fr">fr</option>
                    <option value="canada">Canada</option>
                    <option value="argentine">Argentine</option>
                </optgroup>
                <optgroup label="Autres">
                    <option value="europerope">Europerope</option>
                    <option value="asie">Asie</option>
                    <option value="ameriques">Amériques</option>
                    <option value="oceanie">Océanie</option>
                </optgroup>
                </select>
            </label>
        </form>
    </fieldset>
    </>
  )
}
