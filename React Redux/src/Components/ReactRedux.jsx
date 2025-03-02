// src/Components/ReactRedux.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, DeleteUser, FetchUsers, UpdateUser } from "../Store/ReactRedux/Action";
const ReactRedux = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(()=> {
        dispatch(FetchUsers());
    },[dispatch]);

    const UserHandler = (event) => {
        event.preventDefault();
        let form = event.target;
        let formData = new FormData(form);
        let formObj = Object.fromEntries(formData.entries());
        if (editIndex !== null) {
            dispatch(UpdateUser(editIndex, formObj));
            setEditIndex(null);
        } else {
            dispatch(AddUser(formObj));
        }
        form.reset();
    }
    const HandleDelete = (index) => {
        dispatch(DeleteUser(index));
    }
    const HandleEdit = (index) => {
        const userToEdit = users[index];
        const form = document.querySelector("form");
        form.elements.name.value = userToEdit.name;
        form.elements.email.value = userToEdit.email;
        form.elements.position.value = userToEdit.position;
        setEditIndex(index);
    }
    return (
        <>
            <section>
                <form onSubmit={UserHandler}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter Name" /><br />
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter Gmail" /><br />
                    <label>Position</label>
                    <input type="text" name="position" placeholder="Enter Position" /><br />
                    <input type="submit" value={editIndex !== null ? "Edit Data" : "Add User"} />
                </form>
                <section>
                    <h1>User List</h1>
                    {users && users.length > 0 ? (
                        <ul>
                            {users.map((user, index) => (
                                <li key={index}>
                                    <p>{user.name} - {user.email} - {user.position}</p>
                                    <button onClick={()=>HandleDelete(index)}>X</button>
                                    <button onClick={() => HandleEdit(index)}>E</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No users available.</p>
                    )}
                </section>
            </section>
        </>
    );
}
export default ReactRedux;