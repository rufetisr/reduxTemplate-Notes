import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import { useState } from "react";
// import { store } from './Service/CounterContext';

function App() {
  // const [num, setNum] = useState(0);

  // let data = {
  //   num, setNum
  // }

  return (
    <div className="App">
        <Counter  />
    </div>
  );
}

export default App;
