// // src/redux/reducer.jsx
// const initialState = JSON.parse(localStorage.getItem("users")) || [];

// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_USER":
//             return [...state, action.payload];

//         case "EDIT_USER":
//             return state.map((user, i) =>
//                 i === action.payload.index ? action.payload.updatedUser : user
//             );

//         case "DELETE_USER":
//             return state.filter((_, i) => i !== action.payload);

//         case "LOAD_USERS":
//             return action.payload;

//         default:
//             return state;
//     }
// };

// export default userReducer;




// src/redux/reducer.jsx
const initialState = JSON.parse(localStorage.getItem("users")) || [];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_USERS":
            return action.payload;

        case "ADD_USER":
            return [...state, action.payload];

        case "EDIT_USER":
            return state.map((user, i) =>
                i === action.payload.index ? action.payload.updatedUser : user
            );

        case "DELETE_USER":
            return state.filter((_, i) => i !== action.payload);

        default:
            return state;
    }
};

export default userReducer;
