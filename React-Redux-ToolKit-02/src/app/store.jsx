import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from "../features/cake/cakeSlice"
import iceCreamReducer from "../features/icecream/icecreamSlice"
import userReducer from "../features/user/userSlice"
const logger = createLogger();
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export default store;