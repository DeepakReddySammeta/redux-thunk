
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { deleteUser, loadUsers } from "../Redux-Thunk/Action";
import edit from "../IMG/edit.svg";
import {useNavigate} from "react-router-dom";

// import del from '../IMG/delete.png';

function Table() {


  let navigate = useNavigate();

  const { users } = useSelector(state => state.data)
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, [])

  // Delete User 
  const handleDelete = (id) => {
    if (window.confirm("r eYou Sure ..?")) {
      dispatch(deleteUser(id));
    }
  }

  return (
    <>
      <div className="App mt-5">
        <table className="table table-striped table-hover ">
          <thead className="thead-dark bg-dark text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gmail</th>
              <th>Address</th>
              <th>Contact No</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody className="" >
            {users && users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.contact}</td>
                <td><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 del" viewBox="0 0 20 20" onClick={() => handleDelete(user.id)} fill="currentColor">
                  <path FillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" ClipRule="evenodd" />
                </svg></td>
                <td ><img src={edit} width="18px" height="18px"  alt="Ediot Iage" onClick={()=>navigate(`/edituser/${user.id}`)} /> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
}
export default Table;