import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/Cake/cakeActions";
function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number Of Cakes - {numOfCakes}</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}
export default HooksCakeContainer;