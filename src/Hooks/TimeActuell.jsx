import { useState,useEffect} from "react";

function TimeActuell(){
    const [time,setTime] = useState(0)
    useEffect(() => {
        const timing = new Date().toLocaleTimeString()
        setTimeout(() => setTime(timing),1000)
    },[time])
    return(
        <div>
            <h1>Time Actuelle : {time}</h1>
        </div>
    )
}
export default TimeActuell