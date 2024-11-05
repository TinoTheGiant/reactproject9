import { useState } from 'react'
import './App.css'
import './index.css'

function DelayedCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => {console.log("Before Increment:", count);
        setTimeout(() => {setCount(count + 1);console.log("After Delay:", count + 1);
        }, 2000);
      }}>
        Increment
      </button>
    </>
  );
}

export default function App() {
  return (
    <>
      <DelayedCounter />
    </>
  );
}
