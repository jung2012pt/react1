import React, { Component ,useState} from "react";
import "./App.css";

export default function Counter(props) {
  const  [count,setCount] = useState(props.initialCount);
  
  
    return (
      <div className="container">
        <h1>Count: {count}</h1>
        <button className="btn" onClick={() => setCount(props.initialCount)}>Reset</button>
        <button className="btn" onClick={() => setCount(count - 1)}>-</button>
        <button className="btn" onClick={() => setCount(count + 1)}>+</button>
      </div>
    );
  
}
Counter.defaultProps = { initialCount: 0 };
