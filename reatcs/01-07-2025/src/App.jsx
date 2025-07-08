import './App.css'
import {useReducer, useState} from "react";

    const reducer = (a,b) =>{
        if (b === 'count/increment') return { ...a, count: a.count + 1 }
        if (b === 'count/decrement') return { ...a, count: a.count - 1 }
        if (b === 'name/change') return { ...a, name: b.value }
        return a
    }
function App() {

    const [state, dispatch] = useReducer(reducer , {
        count: 0,
        name : null
    })

    const onIncrease =() =>{
        dispatch({type: 'count/increment'})
    }
    const onDecrease =() =>{
        dispatch({type:'count/decrement'})
    }
    const onInputchange= (e) =>{
        dispatch({
            type: 'name/change',
            value : e.target.value
        })
    }

  return (
    <>
        <h1>count: {state.count}</h1>
        <button onClick={onIncrease} style={{marginRight:8}}>+</button>
        <button onClick={onDecrease}>-</button>
        <input type="text"
               value={state.name || ''}
               onChange={onInputchange}
        />
    </>
  )
}

export default App
