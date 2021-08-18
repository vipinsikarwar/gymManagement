import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function MemberRegister() {
    const history = useHistory()
    const register = (user) => {
        axios.post(`http://localhost:5000/api/v1/users/register`, user)
        .then((res) => {
            if(res.status === 201) {
                console.log(res.data);
                localStorage.setItem('myloginData', JSON.stringify(res.data.userInfo));
                history.push({
                    pathname: '/home',
                });
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const [regData, setRegData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        isAdmin: false,
        email: '',
        gender: '',
        phone: '',
        address: '',
        password: ''
    })
    const [flag, setFlag] = useState(false);
    const handleChange = (e) => {
        let controlledName = e.target.name;
        let controlledValue = e.target.value;
        setRegData({
            ...regData,
            [controlledName]: controlledValue
        })
    }
    const handleSubmit = (e) => {
        if (regData.firstName && regData.lastName && regData.userName && regData.email &&
            regData.gender && regData.phone && regData.address && regData.password) {
            setFlag(true);
        }
        e.preventDefault()
        register(regData);
        setRegData({
            firstName: '',
            lastName: '',
            userName: '',
            isAdmin: false,
            email: '',
            gender: '',
            phone: '',
            address: '',
            password: ''
        })
    }

    

    return (
        <>
        <Header/>
            <div className="container border col-sm-8 mx-auto m-5 p-3 bg-ligh shadow">
                <h4 className="my-2">Member Register</h4>
                <form onSubmit={handleSubmit} className="needs-validation">
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                onChange={handleChange}
                                className="form-control"
                                value={regData.firstName}
                                placeholder="Please Enter First Name" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={regData.lastName}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Please Enter Last Name" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="username">User Name</label>
                            <input
                                type="text"
                                id="username"
                                name="userName"
                                value={regData.userName}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Please Enter Username" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={regData.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter Email Address" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="gender">Gender</label>
                            <select className="form-control" id="gender" name="gender" onChange={handleChange} required>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="mobile">Phone</label>
                            <input className="form-control"
                                id="mobile"
                                type="text"
                                name="phone"
                                value={regData.phone}
                                onChange={handleChange}
                                placeholder="Please Enter Mobile" required />
                        </div>
                        <div className="form-group col-sm-12">
                            <label htmlFor="address">Address</label>
                            <textarea className="form-control"
                                name="address" value={regData.address} onChange={handleChange} required>
                            </textarea>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pass">Password</label>
                            <input className="form-control"
                                id="pass"
                                type="password"
                                name="password"
                                value={regData.password}
                                onChange={handleChange}
                                placeholder="Please Enter Password" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="re-pass">Confirm Password</label>
                            <input className="form-control"
                                id="re-pass"
                                type="password"
                                name="re_password"
                                onChange={handleChange}
                                placeholder="Please Re-Enter Password" required />
                        </div>
                    </div>
                    <div className="my-3 col-sm-12 row justify-content-center">
                        <button type="submit" value="Submit" className="btn btn-outline-primary">Register</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    )
}