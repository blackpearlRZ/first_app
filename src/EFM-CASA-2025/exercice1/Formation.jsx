import React from 'react'

export default function Formation({formation , setformation}) {
  const handleCheckboxChange = (e) => {
    e.preventDefault()
    const { value, checked } = e.target;
setformation((prevFormation) => 
      checked ? [...prevFormation, value] : prevFormation.filter((item) => item !== value)
    );
  };
  return (
    <>
    <fieldset style={{width : 'fit-content'}}>
        <legend>Vos Informations</legend>
        <form action="">
            <input type="checkbox" value="HTML5" 
            onChange={handleCheckboxChange}/>
            <label>Formation en HTML5</label><br />
            <input type="checkbox" value="CSS3" 
            onChange={handleCheckboxChange} />
            <label>Formation en CSS3</label><br />
            <input type="checkbox" value="JS" 
            onChange={handleCheckboxChange}/>
            <label>Formation en JS</label><br />
            <textarea cols={35} rows={3} placeholder='Decrivez vos besoins en formation'></textarea>
        </form>
    </fieldset>
    </>
  )
}
