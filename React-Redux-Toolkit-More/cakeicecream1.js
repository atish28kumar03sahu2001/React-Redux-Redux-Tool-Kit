const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}
function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}
function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}
function restoreIceCream (qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState = {
    numOfIceCreams: 20,
}

const Cakereducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const IceCreamreducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - action.payload,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state
    }
}

const RootReducer = combineReducers({
    cake: Cakereducer,
    icecream: IceCreamreducer
})

const store = createStore(RootReducer);
console.log('InitialState: ',store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('UpdatedState',store.getState())
});

const actions = bindActionCreators(
    {orderCake, restockCake, orderIceCream, restoreIceCream},
    store.dispatch
)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(1)
actions.restockCake(1)
actions.restockCake(1)

actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.restoreIceCream(1)
actions.restoreIceCream(1)
actions.restoreIceCream(1)

unsubscribe();