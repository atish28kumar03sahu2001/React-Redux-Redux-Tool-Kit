// src/Store/ReactRedux/Reducer.jsx
const initialState = {
    users: [],
}
const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload };
        case 'ADD_USER':
            return { ...state, users: action.payload };
        case 'DELETE_USER':
            return { ...state, users: action.payload };
        case 'UPDATE_USER':
            return { ...state, users: action.payload };
        default:
            return state;
    }
}
export default userReducer;