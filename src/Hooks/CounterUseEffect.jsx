import React,{useState, useEffect} from 'react';

function CounterE (){
    const [count,setCount] = useState(0)

    useEffect(() =>{
      setTimeout (()=>{
        setCount((count) =>  count + 1)
      },1000)
    })
    return <h3>I've rendred {count} times </h3>
;
};


export default CounterE;
