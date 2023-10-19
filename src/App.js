import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function decrementHandler(){
    setCount(count-1);
  }

  function incrementHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='wrapper'>
      <div className='title'>
        Increment And Decrement
      </div>
      <div className='button'>
        <button  onClick={decrementHandler} className='left-button'>
          -
        </button>
        <div className='data'>
          {count}
        </div>
        <button onClick={incrementHandler} className='right-button'>
          +
        </button>
      </div>
      <div>
        <button onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
