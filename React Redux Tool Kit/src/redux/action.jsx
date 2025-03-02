// // src/redux/action.jsx
// export const addUser = (user) => async (dispatch, getState) => {
//     dispatch({ type: "ADD_USER", payload: user });

//     const { users } = getState();
//     localStorage.setItem("users", JSON.stringify(users));
// };

// export const editUser = (updatedUser, index) => async (dispatch, getState) => {
//     dispatch({ type: "EDIT_USER", payload: { updatedUser, index } });

//     const { users } = getState();
//     localStorage.setItem("users", JSON.stringify(users));
// };

// export const deleteUser = (index) => async (dispatch, getState) => {
//     dispatch({ type: "DELETE_USER", payload: index });

//     const { users } = getState();
//     localStorage.setItem("users", JSON.stringify(users));
// };

// export const loadUsersFromLocalStorage = () => (dispatch) => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     dispatch({ type: "LOAD_USERS", payload: users });
// };



// src/redux/action.jsx

// Load users from localStorage asynchronously
export const loadUsersFromLocalStorage = () => async (dispatch) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    dispatch({ type: "LOAD_USERS", payload: users });
};

// Add user and update localStorage
export const addUser = (user) => async (dispatch, getState) => {
    dispatch({ type: "ADD_USER", payload: user });

    const { users } = getState();
    localStorage.setItem("users", JSON.stringify(users));
};

// Edit user and update localStorage
export const editUser = (updatedUser, index) => async (dispatch, getState) => {
    dispatch({ type: "EDIT_USER", payload: { updatedUser, index } });

    const { users } = getState();
    localStorage.setItem("users", JSON.stringify(users));
};

// Delete user and update localStorage
export const deleteUser = (index) => async (dispatch, getState) => {
    dispatch({ type: "DELETE_USER", payload: index });

    const { users } = getState();
    localStorage.setItem("users", JSON.stringify(users));
};
