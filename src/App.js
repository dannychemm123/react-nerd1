import { useState } from 'react';
import './App.css';

function App() {
 const [count, setCounter] = useState(0)

  return (
    <div className="app"> 
      <div className="counter">{count}</div>
      <div className="button-group">
        <button className="button increase" onClick={() => setCounter(count + 10)}>Increase</button>
        <button className="button decrease" onClick={() => setCounter(count - 10)}>Decrease</button>
        <button className="button reset" onClick={() => setCounter(0)}>Set to Zero</button>
      </div>
    </div>
  );
}

export default App;

