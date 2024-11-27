import React,{useState, useEffect} from 'react';

function Counter (){
    const [count,setCount] = useState(0)
    function increment() {
        setCount((prevCount) => prevCount + 1);
      };

      function reset() {
        setCount(0);
      };

      function desincrement() {
        setCount((prevCount) => prevCount - 1);
      };

      return(
        <div className='container'>
            <h2>Current count:</h2>
            <h1>{count}</h1>
            <div className='btns'>
                <button onClick={increment}>Incrementer</button>
                <button onClick={reset}>Reset</button>
                <button onClick={desincrement}>Desincrementer</button>
            </div>
        </div>
    );
};


export default Counter;
