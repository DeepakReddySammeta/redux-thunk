import * as types from "./actionTypes";
import axios from "axios";

// Get users 
const getUsers = (users) => (
    {
        type: types.GET_USERS,
        payload: users,
    }

);

// Delete USer 

const userDeleted=()=>({
    type:types.DELETE_USER
});

// Delete USer 

const userAdded=()=>({
    type:types.ADD_USER
});

// get single user USer 

const getUser=(user)=>({
    type:types.GET_SINGLE_USER,
    payload:user
});


// UPDATE 
const userUpdated=()=>({
    type:types.UPDATE_USER,
});



// Read OPeration
export const loadUsers = () => {
    return async function (dispatch) {


        axios.get(
            `${process.env.REACT_APP_API}`
        )
            .then(
                (resp) => {
                    console.log("resp", resp);
                    dispatch(getUsers(resp.data))
                }
            ).catch((err) => {
                console.log(err)
            });

    }
}

// Delete user 
export const deleteUser = (id) => {
    return async function (dispatch) {
        axios.delete(
            `${process.env.REACT_APP_API}/${id}`
        )
            .then(
                (resp) => {
                    console.log("resp", resp);
                    dispatch(userDeleted(resp.data));
                    dispatch(loadUsers());

                }
            ).catch((err) => {
                console.log(err)
            });

    }
}

// User adding 

export const addUser = (user) => {
    return async function (dispatch) {
        axios.post(
            `${process.env.REACT_APP_API} `, user
        )
            .then(
                (resp) => {
                    console.log("resp", resp);
                    dispatch(userAdded());
                    loadUsers();
                }
            ).catch((err) => {
                console.log(err)
            });

    }
}

// uPDATE OF uSER

export const getSingleUser = (id) => {
    return async function (dispatch) {
        axios.get(
            `${process.env.REACT_APP_API}/${id}`
        )
            .then(
                (resp) => {
                    console.log("resp", resp);
                    dispatch(getUser(resp.data));
                    // dispatch(loadUsers());

                }
            ).catch((err) => {
                console.log(err)
            });

    }
}

// Update 
export const updateUser = (user,id) => {
    return async function (dispatch) {
        axios.put(
            `${process.env.REACT_APP_API}/${id}`,user
        )
            .then(
                (resp) => {
                    console.log("resp", resp);
                    dispatch(userUpdated());
                    // dispatch(loadUsers());

                }
            ).catch((err) => {
                console.log(err)
            });

    }
}

