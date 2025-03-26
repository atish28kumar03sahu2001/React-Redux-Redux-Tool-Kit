const store = require('./app/store')
const cakeActions = require("./features/cake/cakeSlice").cakeActions
const iceCreamActions = require("./features/icecream/icecreamSlice").iceCreamActions
console.log("Initial State: ",store.getState());
const unsubscribe = store.subscribe(() => {
    // console.log('Update State: ',store.getState());
})
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(1))
store.dispatch(cakeActions.restocked(1))
store.dispatch(cakeActions.restocked(1))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(1))
store.dispatch(iceCreamActions.restocked(1))
store.dispatch(iceCreamActions.restocked(1))
unsubscribe();