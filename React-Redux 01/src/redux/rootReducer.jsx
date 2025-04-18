import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import iceCreamReducer from "./IceCream/iceCreamReducer";
import userReducer from "./User/userReducer";
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
})
export default rootReducer;