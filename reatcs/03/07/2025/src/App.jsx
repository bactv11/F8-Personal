import './App.css'
import {store} from "./core/index.js";
import {useDispatch, useSelector} from "react-redux";
import {v7} from "uuid";
import { nanoid } from 'nanoid'
import ProductList from "./component/ProductList/ProductList.jsx";
import Search from "./component/Search/Search.jsx";

function App() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count)

    const onAddProduct = () => {
        const id = nanoid();
        dispatch({
            type: "products/addNewProduct",
            value: {
                id , name:`name ${id}`
            }
        })
    }
  return (
    <>
      <h1>count :{count}</h1>
      <button style={{margin: 10}} onClick={() => dispatch({type:'count/increase'})}>+</button>
      <button style={{margin: 10}} onClick={onAddProduct}>Add new product</button>
        <Search/>
        <ProductList/>
    </>
  )
}
export default App
