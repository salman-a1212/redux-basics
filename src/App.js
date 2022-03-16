import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, showText, reset } from "./actions";
import { useState } from "react";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const clear = () => {
    setInput("");
    dispatch(reset());
  };

  return (
    <div className='App'>
      <input
        type='number'
        name=''
        id=''
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(input))}>+</button>
      <button onClick={() => dispatch(decrement(input))}>-</button>
      <button onClick={clear}>Reset</button>
      {isLogged ? <h3>Valuable informaton I shouldn't see</h3> : ""}
      <button onClick={() => dispatch(showText())}>
        {!isLogged ? "show me" : " hide me"}
      </button>
    </div>
  );
}

export default App;
