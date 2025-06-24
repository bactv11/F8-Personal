import './App.css'
import {useEffect, useState} from "react";

function App() {
    let [counter,setCounter] = useState(0);
    const count =() =>{
        setCounter( (counter) =>counter+1)
        setCounter( (counter) =>counter+1)
        setCounter( (counter) =>counter+1)
    }
    useEffect(()=>{
        console.log(counter)
    }, [counter])
  return (
      <>
          <h1>Hello World! :{counter}</h1>
          <button  onClick={count}>Counter</button>
      </>
  )
}
export default App
