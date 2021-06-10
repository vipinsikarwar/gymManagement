import React from 'react';

export default function MenberRegister() {
    return(
        <>
            <h1>This is Member Register Component</h1>
            <div className="col-sm-6">
                <form>
                    <div className="form-group">
                        <label>First Name : </label>
                        <input className="form-control" type="text" placeholder="Please Enter First Name" />
                    </div>
                    <div className="form-group">
                        <label>Last Name : </label>
                        <input className="form-control" type="text" placeholder="Please Enter Last Name" />
                    </div>
                    <div className="form-group">
                        <label>Address : </label>
                        <textarea className="form-control" type="text" placeholder="Please Enter Address"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Gender : </label>
                        <select className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Mobile : </label>
                        <input className="form-control" type="text" placeholder="Please Enter Mobile" />
                    </div>
                    <div className="form-group">
                        <label>Registeration Type : </label>
                        <select className="form-control">
                            <option>New</option>
                            <option>Re-Join</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input className="form-control" type="password" placeholder="Please Enter Password" />
                    </div>
                    <div className="form-group">
                        <label>Re-Enter Password : </label>
                        <input className="form-control" type="password" placeholder="Please Re-Enter Password" />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">Active</label>
                        <input className="form-check" type="checkbox" />
                    </div>
                    <button className="btn btn-primary">Register</button>
                </form>
            </div>
        </>
    )
}