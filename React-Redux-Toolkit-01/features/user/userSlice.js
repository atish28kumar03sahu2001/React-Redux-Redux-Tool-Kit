const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios');
const initialState = {
    loading: false,
    users: [],
    error: ''
}
const fetchUsers = createAsyncThunk('USER/fetchUsers',() => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data.map((user) => user.name))
})
const userSlice = createSlice({
    name: 'USER',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state =>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action) =>{
            state.loading = false,
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users= []
            state.error = action.error.message
        })
    }
})
module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers