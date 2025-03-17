const redux = require('redux');
const createStore = redux.createStore
const BUY_ICECREAM = 'BUY_ICECREAM'
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
}
const initialState = {
    numOfIceCreams: 20,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state;
    }
}
const store = createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Update State',store.getState()));
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();