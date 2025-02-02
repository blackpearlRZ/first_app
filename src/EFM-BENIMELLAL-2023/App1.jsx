import React, { useState } from "react"
function App(){
    const [gender, setGender] = useState('')
    const[poidsideal,setPoidsideal] = useState('')
    const [error , setError] = useState('')
    function images(e){
        const selected = e.target.form[1].value
        if (selected == "male"){
            setGender('male')
        }else{
            setGender("female")
        }
    }
    function calculer(e){
        e.preventDefault()
        const taille = e.target.form[0].value
        if(gender =="male"){
            const poids = taille - 100 - (taille - 150) / 4
            setPoidsideal( poids)
        }else{
            const poids = taille - 100 - (taille - 150) / 2.5
            setPoidsideal( poids)   
        }
    }
    function handlError(e){
        const taille = e.target.form[0].value
        e.preventDefault()
        console.log(isNaN( taille))
        if (isNaN(taille)){
            setError("saisie Un nombre")
        }else if (parseInt(taille) < 150){
            setError("Taille inferieur a 150")
        }
        else{
            setError('')
        }
    }
    return(
    <>
    
        <form>
            <label>Taille en CM : </label>
            <input type="text" onChange={handlError}/>
            <p style={{color : "red"}}>{error}</p>
            <label>Genre : </label>
            <div>
                <select onChange={images}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                {gender == "male" ? 
                <><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAAAcVJREFUaEPtlztLA0EURs/drJVg7QM7xT9gq12MDwRrGwULS60sBDFoaaEIgmDtHxBf2TSCiI12Fj5bbSxFBLNzJagg0chmdoIGZtudO3PmzLczs0KDPtKg3HjwypXLo8EJz61Fmu/rsarOjZeBTzEbClNAk8CjgfUimWWXE3AOPoDZAR39AXIlIjPnCt4peJbSsCB71eCEoL2APLiAdwweLwgsVQNTdKRIuP/vwHPEswqrvxjvLyDH/w48i3YL5vpnMLmLCLpcQJf7cBqVcoc5dEYxaxWAr4qOuYpJXcA/4PsMZlyQDogvlXCriNy4sl03cJeA1b+X1KOoDEIvlJqTdxU+HCJXydt/b5kq40NoS4y5ADprh5CDiGC49rr3ilTgOUrjimzbDx50F5Bbm/pU4FniaYFNm4Hfa4LeCDm3qffgNta88Vqt+YzXaiztduiNe+MJDfioJBT1tZk/OS2k/d1dJYe2CaWeT2hDMAlM/DKJ+QBz+vn+hfDsCHmymXSqqFQOOECcBxarg+hoRLhrA1pZ48HLRrzxBFnyUfFRSRCT1H/5fjtMaNnZXcUb98YtDDT0dmg5X6sypyenFYFlUcOCvwEtK8gvEgtInQAAAABJRU5ErkJggg=="/>
                </>
                :<><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAAArBJREFUaEPtmD9oFEEUh7+3u8Fo0ogGxMNGDNgoiGAX0TYa1MYishtCijSCVjYaDNHOwiAIhoC4m2gtQdOLtYpWJnIWFtqkkyjo7Y4u5mK43JqdPzE5uK3fvPfNb34z83aEFv2kRblpgzeunGLc+8aBfV2MfN6MVXWueA6ccfA+MAJ0AEug7vkM3XI5AefgGcmcgoH1kHLHJ7zmCt4peI2kX+B5EZyH7BfCLy7gnYKnxGMgE0VgCs4ERPPbEDy5Ctz9h+InhfDltgNXPO7NSBebgQlUPaJDLqDzHE6tkidUzFzJUJMNgD8VnHdlk00BX4Hvy1CDApUU9T4gmxaGP7hSe9PAXQIW5XJmFcXULthxrIafXzpNvwBZhsob4XTNdnJOwBUPezKCBWD3xkDyyqN6QhjPNo4tjnACnpLcBq6XBVHIhYDwadn4glPKZvifsSnxIkivRqYnPtEljfh1odaKK+KjGfJWE+KrR+de4eIPzXGr4dbgKUne9d3QBVDIuYBwTndcPd4BuLZNVmrLrE8Ybgm4oU3qrFZ2sVLc1CZ1coUaCBh6ZqK6JbipTVZRE59o6L+CK2aPZGTvTIquGWNsF2PFU2YmQI1ZgqOQswFh4V9TUX4LcGub1Jke+UTDugIYgSviSobkvUmXbsEm8Qs+0WHdPEbgeRHFVEeNnX0e9AOjQLdG8U/AtIfMC+FrjXHubs6Vd5RloLMsgIIXAdGpsvHN4owV/3sWG/Uq3z0+dtu0ttbgKfEoyANd9TzkuKlN8loOwJMYiHTBfz/NXfaJ8qc6o88BuOmxuLVN1p4MWTKSDKq+xTuLleI1kgEB457aI+gRBo0mbgXeqHRKPA5ys2gFbLrBxpxt8FyRtuIldnvbKm2rlLCJkyt/bZ2W3ZwlxXIS5nRzOiEqmaRlwX8BSDHZLzqFUHAAAAAASUVORK5CYII="/>
                </> }
            </div>
            <label>Poids ideal :</label>
            <input type="text"  value={"poids ideal est : " + poidsideal} readOnly/>
            <button onClick={(e) => calculer(e)}>Calculer</button>
        </form>
    </>
    )
}
export default App