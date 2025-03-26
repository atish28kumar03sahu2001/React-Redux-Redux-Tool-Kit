const createSlice = require('@reduxjs/toolkit').createSlice
const initialState = {
    numOfIceCream: 20
}
const iceCreamSlice = createSlice({
    name: 'ICECREAM',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCream--;
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase('CAKE/ordered', (state) => {
            state.numOfIceCream--;
        });
    }
})
module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions