import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';

const AdminDashboard = () => {
  // const myLoginData = JSON.parse(localStorage.getItem('myloginData'));
  // console.log('local storage data in admin dashboard', myLoginData);
  // const myLoginData = {}
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    phone: '',
    password: '',
    address: '',
    gender: '',
    isAdmin: false
  });
  const [checked, setChecked] = useState(false);

  const myLoginData = JSON.parse(localStorage.getItem('myloginData'))
  // const [myLoginData, setMyLoginData] = useState([]);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem('myloginData');
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setMyLoginData(foundUser);
  //   }
  // }, []);

  const addHandleChange = (event) => {
      let controlName = event.target.name;
      let controlValue = event.target.value;
      setNewUser({
        ...newUser,
        [controlName]: controlValue
      })
  }
  // console.log(newUser);

  const addHandleSubmit = (event) => {
    // event.preventDefault()
    axios.post(`http://localhost:5000/api/v1/users/register`, newUser)
    .then((res) => {
        if (res.status === 201) {
            console.log(res);
            alert(res.data.message)
        }
    })
    .catch((error) => {
        console.log(error);
    })
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/users/allusers`) //Axios usage
        .then((res) => {
            setUsers(res.data);
        })
  }, [users])

  const handleChange = (event) => {
      let controlName = event.target.name;
      let controlValue = event.target.value;
      setUserEdit({
        ...userEdit,
        [controlName]: controlValue
      });
  }

  const edit = (id) => () => {
      const userEdit = users.find((data)=>{
          return data._id === id
      })
      setUserEdit({
          ...userEdit,
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const userId = event.target.dataset.id;
    
    axios.put(`http://localhost:5000/api/v1/users/edituser/${userId}`, userEdit)
    .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          alert(res.data.message)
        }
    })
    .catch((res) => {
        console.log(res.message);
    })
  }
  
  const handleDelete = (event) => {
    event.preventDefault()
    const userId = event.target.dataset.id;

    axios.delete(`http://localhost:5000/api/v1/users/deleteuser/${userId}`)
    .then((res) => {
      if(res.status === 200) {
        console.log(res.data);
        alert(res.data.message)
      }
    })
    .catch((res) => {
      console.log(res.data);
    })
  }

  return(
    <>
    <Header myLoginData={myLoginData}/>
      <Container className="border col-sm-8 mx-auto my-5 p-3 shadow">
        <Row className="d-flex justify-content-between p-3">
          <div>
            <h4>Members</h4>
            
          </div>
          <div>
            <Button 
              className="btn shadow-none" 
              type="button" 
              data-toggle="collapse" 
              data-target="#addNewMember" 
              aria-expanded="true" 
              aria-controls="#addNewMember">Add new member</Button>
          </div>

          <div id="addNewMember" className="collapse">
            <form onSubmit={addHandleSubmit} id="addNewMember">
              <div className="form-row">
                <div className="form-group col-sm-3">
                  <label>First Name</label>
                  <input type="text" id="firstName" name="firstName" onChange={addHandleChange} className="form-control" placeholder="firstname"/>
                </div>
                <div className="form-group col-sm-3">
                  <label>Last Name</label>
                  <input type="text" id="lastName" name="lastName" onChange={addHandleChange} className="form-control" placeholder="lastname"/>
                </div>
                <div className="form-group col-sm-3">
                  <label>Username</label>
                  <input type="text" id="username" name="userName" onChange={addHandleChange} className="form-control" placeholder="username"/>
                </div>
                <div className="form-group col-sm-3">
                  <label>Email</label>
                  <input type="email" id="email" name="email" onChange={addHandleChange} className="form-control" placeholder="email"/>
                </div>
                <div className="form-group col-sm-3">
                  <label for="gender">Gender</label>
                  <select className="form-control" id="gender" name="gender" onChange={addHandleChange}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Other</option>
                  </select>
                </div>
                <div className="form-group col-sm-3">
                  <label>Phone</label>
                  <input type="text" id="phone" name="phone" onChange={addHandleChange} className="form-control" placeholder="phone"/>
                </div>
                <div className="form-group col-sm-3">
                  <label>Address</label>
                  <input type="text" id="address" name="address" onChange={addHandleChange} className="form-control" placeholder="address"/>
                </div>
                <div className="form-group col-sm-3">
                  <label>Password</label>
                  <input type="password" id="password" name="password" onChange={addHandleChange} className="form-control" placeholder="password"/>
                </div>
                <div className="form-group col-sm-3 d-flex">
                  <label>Is Admin</label>
                  <input type="checkbox" name="isAdmin" defaultChecked={false} onChange={addHandleChange}  style={{border:'2px dotted #00f',display:'block', background:'#ff0000', marginTop: 7, marginLeft: 10}}/>
                </div>
              </div>
              <button type="submit" value="Submit" className="btn btn-outline-primary">Add</button>
            </form>
          </div>
        </Row>
        <Row className="bg-light border border-light p-3">
          <Col sm={2} className="col-2">Firstname</Col>
          <Col sm={4} className="col-4">Email</Col>
          <Col sm={2} className="col-2">Phone</Col>
          <Col sm={2} className="col-2">Address</Col>
          <Col sm={2} className="col-2"></Col>
        </Row>
        {users.map((user) => (
            <Row key={(user._id).toString()} className="p-3">
                <Col sm={2} className="border border-light col-2">{user.firstName}</Col>
                <Col sm={4} className="border border-light col-4">{user.email}</Col>
                <Col sm={2} className="border border-light col-2">{user.phone}</Col>
                <Col sm={2} className="border border-light col-2">{user.address}</Col>
                <Col sm={2} className="d-flex border border-light col-2">
                  <button onClick={edit(user._id)} className="btn btn-link shadow-none" type="button" data-toggle="collapse" data-target={`#UD${(user._id).toString()}`} aria-expanded="true" aria-controls={`#UD${(user._id).toString()}`}>
                    Edit
                  </button>
                  <button className="btn btn-link shadow-none" type="button" data-id={(user._id).toString()} onClick={handleDelete}>
                    Delete
                  </button>
                </Col>
                <div id={`UD${(user._id).toString()}`} className="collapse">
                  <div className="card-body border">
                    <form onSubmit={handleSubmit} data-id={(user._id).toString()}>
                      <div className="form-row">
                        <div className="form-group col-sm-3">
                          <label>First Name</label>
                          <input type="text" id="firstName" name="firstName" onChange={handleChange} className="form-control" placeholder="firstname" value={userEdit.firstName}/>
                        </div>
                        <div className="form-group col-sm-3">
                          <label>Last Name</label>
                          <input type="text" id="lastName" name="lastName" onChange={handleChange} className="form-control" placeholder="lastname" value={userEdit.lastName}/>
                        </div>
                        <div className="form-group col-sm-3">
                          <label>Email</label>
                          <input type="text" id="email" name="email" onChange={handleChange} className="form-control" placeholder="email" value={userEdit.email}/>
                        </div>
                        <div className="form-group col-sm-3">
                          <label>Phone</label>
                          <input type="text" id="phone" name="phone" onChange={handleChange} className="form-control" placeholder="phone" value={userEdit.phone}/>
                        </div>
                        <div className="form-group col-sm-3">
                          <label>Address</label>
                          <input type="text" id="address" name="address" onChange={handleChange} className="form-control" placeholder="address" value={userEdit.address}/>
                        </div>
                      </div>
                      <button type="submit" value="Submit" className="btn btn-outline-primary">Update</button>
                    </form>
                  </div>
                </div>
            </Row>
        ))}

      </Container>
      <Footer/>
    </>
  )
}

export default AdminDashboard;