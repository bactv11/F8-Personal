import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, SET_SEARCH_TERM } from './actionTypes';

const initialState = {
    products: [],
    searchTerm: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        case DELETE_PRODUCT:
            return { ...state, products: state.products.filter(p => p.id !== action.payload) };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(p =>
                    p.id === action.payload.id ? action.payload : p
                ),
            };
        case SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        default:
            return state;
    }
};

export default reducer;
