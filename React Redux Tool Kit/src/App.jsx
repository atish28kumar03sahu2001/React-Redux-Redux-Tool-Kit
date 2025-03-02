// // src/Components/ReactRedux.jsx
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser, editUser, deleteUser, loadUsersFromLocalStorage } from "./redux/action";

// const App = () => {
//     const dispatch = useDispatch();
//     const users = useSelector((state) => state.users);
//     const [editIndex, setEditIndex] = useState(null);

//     useEffect(() => {
//         dispatch(loadUsersFromLocalStorage());
//     }, [dispatch]);

//     const UserHandler = (event) => {
//         event.preventDefault();
//         let form = event.target;
//         let formData = new FormData(form);
//         let formObj = Object.fromEntries(formData.entries());

//         console.log(formObj); // Debugging

//         if (editIndex !== null) {
//             dispatch(editUser(formObj, editIndex));
//         } else {
//             dispatch(addUser(formObj));
//         }
        
//         form.reset();
//         setEditIndex(null);
//     };

//     const handleEdit = (index) => {
//         setEditIndex(index);
//         const user = users[index];

//         // Populate form fields manually
//         document.querySelector('input[name="name"]').value = user.name;
//         document.querySelector('input[name="email"]').value = user.email;
//         document.querySelector('input[name="position"]').value = user.position;
//     };

//     const handleDelete = (index) => {
//         dispatch(deleteUser(index));
//     };

//     return (
//         <>
//             <section>
//                 <form onSubmit={UserHandler}>
//                     <label>Name</label>
//                     <input type="text" name="name" placeholder="Enter Name" required /><br />

//                     <label>Email</label>
//                     <input type="email" name="email" placeholder="Enter Email" required /><br />

//                     <label>Position</label>
//                     <input type="text" name="position" placeholder="Enter Position" required /><br />

//                     <input type="submit" value={editIndex !== null ? "Edit Data" : "Add User"} />
//                 </form>

//                 <section>
//                     <h1>User List</h1>
//                     <ul>
//                         {users.map((user, index) => (
//                             <li key={index}>
//                                 {user.name} - {user.email} - {user.position}
//                                 <button onClick={() => handleEdit(index)}>Edit</button>
//                                 <button onClick={() => handleDelete(index)}>Delete</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </section>
//             </section>
//         </>
//     );
// };

// export default App;




// src/Components/ReactRedux.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, deleteUser, loadUsersFromLocalStorage } from "./redux/action";

const ReactRedux = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        dispatch(loadUsersFromLocalStorage());
    }, [dispatch]);

    const UserHandler = (event) => {
        event.preventDefault();
        let form = event.target;
        let formData = new FormData(form);
        let formObj = Object.fromEntries(formData.entries());

        console.log(formObj); // Debugging

        if (editIndex !== null) {
            dispatch(editUser(formObj, editIndex));
        } else {
            dispatch(addUser(formObj));
        }
        
        form.reset();
        setEditIndex(null);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        const user = users[index];

        // Populate form fields manually
        document.querySelector('input[name="name"]').value = user.name;
        document.querySelector('input[name="email"]').value = user.email;
        document.querySelector('input[name="position"]').value = user.position;
    };

    const handleDelete = (index) => {
        dispatch(deleteUser(index));
    };

    return (
        <>
            <section>
                <form onSubmit={UserHandler}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter Name" required /><br />

                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter Email" required /><br />

                    <label>Position</label>
                    <input type="text" name="position" placeholder="Enter Position" required /><br />

                    <input type="submit" value={editIndex !== null ? "Edit Data" : "Add User"} />
                </form>

                <section>
                    <h1>User List</h1>
                    <ul>
                        {users.map((user, index) => (
                            <li key={index}>
                                {user.name} - {user.email} - {user.position}
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </>
    );
};

export default ReactRedux;
