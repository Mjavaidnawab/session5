import React, {useState} from 'react';
import Parent from './Parent';
import './App.css';
import counterContext from './CounterContext';

function App() {
  let countState  = useState(1)
  //let [count, setCount ] = useState(30)
  return (
   // <counterContext.Provider value = {25}>
   <counterContext.Provider value = {countState}>
    <div >
      <Parent  />
    </div>


    </counterContext.Provider>
  );
}

export default App;
