import Child from './child';
import {useState} from 'react'

function Parent(){
    const [valeur, setValeur] = useState("");

    const handleValueFromChild = (childValue) => {
        setValeur(childValue);
    }

    return(
        <>
            <p>La valeur recu de child . {valeur}</p><br/>
            <Child sendValueToChild = {handleValueFromChild}/>
        </>
    );
}
export default Parent;