import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ordered, restocked} from "./icecreamSlice";
export const IcecreamView = () => {
    const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number Of IceCreams - {numOfIceCream}</h2>
            <button onClick={() => dispatch(ordered())}>Order IceCream</button>
            <button onClick={() => dispatch(restocked(1))}>Restored IceCreams</button>
        </div>
    );
};
