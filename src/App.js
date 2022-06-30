
import './App.css';
import Table from './Components/Table';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NotFound from './Components/NotFound';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';


function App() {
  return (
    <>
    {/* <Table/> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <p className="navbar-brand text-dark ">Redux-Thunk GET-PUT-POST-DELETE</p>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav ">
      <li className="nav-item active">
      <Link className="badge badge-dark text-dark mx-5  badge-pill" to='/'>
                      Home
                    </Link>
      </li>
      <li className="nav-item">
      <Link className="badge badge-dark text-dark mx-5 badge-pill" to='/adduser'>
                      Add User 
                    </Link>
      </li>
    </ul>
  </div>
</nav>
            {/* Routes  */}
            <Routes>
            <Route path='/' element={<Table />}/>
            <Route path='/adduser' element={<AddUser/>} />
            <Route path='/edituser/:id' element={<EditUser/>} />

            {/* <Route path='*' element={<NotFound/>} /> */}
            <Route path='*' element={<NotFound/>}/>
          </Routes>

    
    </>
      );
}

export default App;
