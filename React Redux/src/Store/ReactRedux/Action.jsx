// src/Store/ReactRedux/Action.jsx
export const AddUser = (user) => {
    return (dispatch) => {
        let ExistingUsers = JSON.parse(localStorage.getItem('USERS')) || [];
        ExistingUsers.push(user);
        localStorage.setItem('USERS', JSON.stringify(ExistingUsers));
        dispatch({
            type: 'ADD_USER',
            payload: ExistingUsers,
        })
    }
}

export const FetchUsers = () => {
    return (dispatch) => {
        let ExistingUsers = JSON.parse(localStorage.getItem('USERS')) || [];
        dispatch({
            type: 'SET_USERS',
            payload:ExistingUsers,
        })
    }
}

export const DeleteUser = (index) => {
    return (dispatch) => {
        let ExistingUsers = JSON.parse(localStorage.getItem('USERS')) || [];
        ExistingUsers.splice(index, 1);
        localStorage.setItem('USERS',JSON.stringify(ExistingUsers));
        dispatch({
            type: 'DELETE_USER',
            payload: ExistingUsers,
        })
    }
}

export const UpdateUser = (index, updatedUser) => {
    return (dispatch) => {
        let ExistingUsers = JSON.parse(localStorage.getItem("USERS")) || [];
        ExistingUsers[index] = updatedUser;
        localStorage.setItem("USERS",JSON.stringify(ExistingUsers));
        dispatch({
            type: "UPDATE_USER",
            payload: ExistingUsers,
        })

    }
}