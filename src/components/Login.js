import React from 'react';

export default function Login() {
    return (
        <>
            <h1>This is Login Component</h1>
            <div className="col-sm-6">
                <form>
                    <div className="form-group">
                        <label>Email : </label>
                        <input className="form-control" type="text" placeholder="Please Enter First Name" />
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input className="form-control" type="text" placeholder="Please Enter First Name" />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">Remember Me</label>
                        <input className="form-check" type="checkbox" />
                    </div>
                    <br />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        </>
    )
}