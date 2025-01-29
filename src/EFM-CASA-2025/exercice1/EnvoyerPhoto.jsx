import React from 'react'

export default function EnvoyerPhoto() {
  return (
    <>
    <fieldset style={{width : 'fit-content'}}>
        <legend>Envoyer nous votre photo</legend>
        <form>
            <input type="file" /><br/><br/>
            <button>Effacer</button>
            <button>Envoyer</button>
        </form>
    </fieldset>
    </>
  )
}
