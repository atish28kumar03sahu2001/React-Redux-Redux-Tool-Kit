// // src/redux/store.jsx
// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./reducer";

// const store = configureStore({
//     reducer: {
//         users: userReducer,
//     },
// });

// export default store;


// src/redux/store.jsx
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer";
import {thunk} from "redux-thunk";

const store = configureStore({
    reducer: {
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
