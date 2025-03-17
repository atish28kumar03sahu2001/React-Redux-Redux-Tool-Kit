import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/IceCream/iceCreamActions";
function HooksIceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.icecream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number Of IceCream - {numOfIceCreams}</h1>
            <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    );
}
export default HooksIceCreamContainer;