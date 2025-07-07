import {useDispatch, useSelector} from "react-redux";

export default function (){
    const dispatch = useDispatch();
    const products = useSelector(state =>{
        if (state.searchStr) return state.products.filter(product => product.name.includes(state.searchStr));
        return state.products;
    })

    const onDelete = (id) => {
        dispatch({
            type: "products/deleteProduct",
            value: {
                id , name : `name ${id}`
            }
        })
    }
    return (
        <>
            <ul>
                {
                    products.map(product => {
                        return (
                            <li key={product.id}>
                                <span style={{margin:10}}>{product.name}</span>
                                <button onClick={() =>onDelete(product.id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}