import React from 'react';

export default function AdminDashboard() {
    return (
        <>
            <h1>This is Admin Dashboard Component</h1>
            <div className="col-sm-12">
                <h4>Member Grid</h4>
                <button className="btn btn-success">Add Member</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Status</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Plan</th>
                            <th>Reg Date</th>
                            <th>End Date</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Vipin</td>
                            <td>Sikarwar</td>
                            <td><a href="#">Active</a></td>
                            <td>9998887770</td>
                            <td>Agra, Uttar Pradesh</td>
                            <td>Gold</td>
                            <td>01-June-2021</td>
                            <td>30-June-2021</td>
                            <td>
                                <a href="#">Edit</a>/
                            <a href="#">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <div className="col-sm-12">
                <h4>Admin Grid</h4>
                <button className="btn btn-success">Add Admin</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Status</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Vipin</td>
                            <td>Sikarwar</td>
                            <td><a href="#">Active</a></td>
                            <td>
                                <a href="#">Edit</a>/
                            <a href="#">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <div className="col-sm-12">
                <h4>Plans Grid</h4>
                <button className="btn btn-success">Add Plan</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Plan Name</th>
                            <th>Duration</th>
                            <th>Exercise Type</th>
                            <th>Price</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Gold</td>
                            <td>Half Yearly</td>
                            <td>Gym+Cardio</td>
                            <td><a href="#">Active</a></td>
                            <td>
                                <a href="#">Edit</a>/
                            <a href="#">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}