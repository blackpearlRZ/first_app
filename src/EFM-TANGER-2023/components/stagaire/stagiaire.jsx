import './stagiaire.css'
import { useNavigate } from 'react-router-dom'
export default function Stagiaire({props}) {
  const Navigate = useNavigate()
  function handleClick(){
    Navigate(`/${props.nom}`)
  }
  return (
    <div className='stagaire'>
          <img onClick={handleClick} src={props.image} alt="photo" />
        <h4>{props.nom}</h4>
    </div>
  )
}
