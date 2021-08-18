import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import Header from './Header';
import Footer from './Footer';

export default function Login() {
    const [loginData, setLoginData] = useState({
        userName: "",
        password: "",
        isLoggedin: false
    })

    const history = useHistory()
    const [errMsg, setErrMsg] = useState([]);

    const login = (user) => {
        axios.post(`http://localhost:5000/api/v1/users/login`, user)
        .then((res) => {
            if(res.data.status === 404) {
                setErrMsg(res.data.message);
            } else {
                localStorage.setItem('myloginData', JSON.stringify(res.data));
                history.push({
                    pathname: '/home',
                });
            }
        })
    }

    const handleChange = (e) => {
        let controlledName = e.target.name;
        let controlledValue = e.target.value;
        setLoginData({
            ...loginData,
            [controlledName]: controlledValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(loginData);
    }

    return (
        <>
            <Header/>
            <div className="container border col-sm-6 mx-auto my-5 p-3 shadow">
                <h4 className="my-2">Login Component</h4>
                <form onSubmit={handleSubmit} className="needs-validation">
                    <div className="form-group">
                        <label className="my-2" htmlFor="userName">Username</label>
                        <input type="text" className="form-control"
                            id="userName" name="userName" 
                            onChange={handleChange} placeholder="Enter Email" required />
                    </div>
                    <div className="form-group">
                        <label className="my-2" htmlFor="pwd">Password</label>
                        <input type="password" className="form-control"
                            id="pwd" name="password" 
                            onChange={handleChange} placeholder="Enter password" required />
                    </div>
                    <div className="col-sm-12 row justify-content-center">
                        <input className="btn btn-outline-success" type="submit" value="Submit" />
                    </div>
                    {errMsg ? <p>{errMsg}</p> : ''}
                </form>
            </div>
            <Footer />
        </>
    )
}