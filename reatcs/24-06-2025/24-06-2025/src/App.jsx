import './App.css'
import {memo, useState} from "react";
///////////////////////////////////////////////
const Com1 = memo(() =>{
    console.log("Hello World1")
    return (
        <h1>component1</h1>
    )
})
const Com2 = memo(() =>{
    console.log("Hello World2")
    return (
        <h1>component2</h1>
    )
})

function App() {
    const [count, setCount] = useState(0);
    console.log('count', count);
  return (
    <>
        <Com1 />
        <Com2 />
        <p>count :{count}</p>
        <button onClick={
            () => setCount(count + 1)
        }>count</button>
    </>
  )
}
export default App
