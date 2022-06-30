import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {  updateUser } from "../Redux-Thunk/Action";


function AddUser() {

    let navigate = useNavigate();
    const[error,SetError]=useState("");
    let dispatch=useDispatch();

    const [state, SetState] = useState(
        {
            name: "",
            email: "",
            contact: "",
            address: ""
        }
    );

    const {name,email,contact ,address}=state;

    const handleInputChange = data => e =>{
        //  console.log(name, e.target.value) 
        SetState(prevState => {
            return {...prevState, [data]: e.target.value}
        })

        // console.log(name, e.target.value)

    }


   const  handleSubmit=(e)=>{
        e.preventDefault();
        // if(!name || !email || !contact || !address){
        //     SetError("Please Enter all input fields ");

        // }else{
        //     dispatch(AddUser(state));
        //     navigate("/");
        // }

        console.log({state})
        dispatch(updateUser(state));
            navigate("/");
        SetError("");

        SetState({
            name: "",
            email:"",
            contact:"",
            address:""

        })

    }

    return (
        <>
        <div className="newUserComponent">

                 <h3  className="text-success d-block text-center m-3 mb-2" ><u> Please Enter Details of New User</u> </h3>
                 {error && <h5 className="text-danger text-center"> Please enter values </h5>}
            <form className=" addUser mt-2  " onSubmit={handleSubmit}>
                <input className="text-dark d-block text-center new m-3 mb-3" type="text" placeholder="Name" name="name" value={name} onChange={handleInputChange("name")} />
                <input className="text-dark d-block text-center new m-3 mb-3" type="email" placeholder="Email" name="email" value={email}  onChange={handleInputChange("email")} />
                <input className="text-dark d-block text-center new m-3 mb-3" type="number" placeholder="contact"  name = "contact" value={contact}  onChange={handleInputChange("contact")} />
                <input className="text-dark d-block text-center new m-3 mb-3" type="text" placeholder="Address" name="address" value={address}  onChange={handleInputChange("address")}/>
                <div>
                    <button className="btn border-0 rounded  btn-success mx-5 mt-3 mb-3" type="submit"> Add User</button>
                </div>
            </form>
            
        </div>
        </>

    );
}
export default AddUser;