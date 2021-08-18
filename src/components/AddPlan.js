import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery'
import Footer from './Footer';
import Header from './Header';

export default function AddPlan(props) {
    const myLoginData = JSON.parse(localStorage.getItem('myloginData'));
    // Function for Action Alerts - Auto Disappear
    // Alert Html is added in JSX
    const displayAlert = (data) => {
        $('.main-alert').fadeIn(1000).fadeOut(5000); // 5 seconds x 1000 milisec = 5000 milisec
        $('.main-alert .alert').text(data)
    }

    const resetData = () => {
        // Reset Data
        setPlanData({
            planId: '',
            planName: '',
            description: '',
            price: '',
            status: ''
        })
    }

    const [planData, setPlanData] = useState({
        planId: '',
        planName: '',
        description: '',
        price: '',
        status: ''
    })
    const handleChange = (e) => {
        let controlledName = e.target.name;
        let controlledValue = e.target.value;
        setPlanData({
            ...planData,
            [controlledName]: controlledValue
        })
    }

    const formValid = () => {
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValid) {
            if (planData._id) {
                return editPlanDetails(planData).then(() => {
                    getAllPlans()
                    resetData()
                })
            }
            console.log(planData);
            return addPlanDetails(planData).then(() => {
                getAllPlans()
                resetData()
            })
        } else {
            return false
        }
    }

    // Add Plan
    const addPlanDetails = (data) => {
        return axios.post(`http://localhost:5000/api/v1/plans/addplan`, data).then((res) => {
            console.log(res.data.planInfo);
            displayAlert("Plan Added Successfully")
        })
    }

    // GetData
    const [allPlanData, setAllPlanData] = useState([]);

    const getAllPlans = () => {
        return axios.get(`http://localhost:5000/api/v1/plans/getplans`).then((res) => {
            setAllPlanData(res.data)
            console.log(allPlanData)
        })
            .catch(error => { console.log(`Error ${error}`); })
    }

    useEffect(() => {
        getAllPlans()
    }, []);

    // Delete Plan
    const deletePlan = (id) => () => {
        if (window.confirm("Confirm delete this Record!")) {
            return deletePlanDetails(id).then(getAllPlans)
        }
    }

    const deletePlanDetails = (id) => {
        return axios.delete(`http://localhost:5000/api/v1/plans/deleteplan/${id}`).then((res) => {
            console.log(res.data.message);
            displayAlert(res.data.message)
        })
    }

    // Edit Plan
    const editPlan = (id) => () => {
        const planData = allPlanData.find((data) => {
            return data._id === id
        })
        setPlanData({
            ...planData,
        })
    }

    const editPlanDetails = (data) => {
        return axios.put(`http://localhost:5000/api/v1/plans/editplan/${data._id}`, data).then((res) => {
            console.log(res.data.message);
            displayAlert(res.data.message)
        })
    }

    let displayPlans = allPlanData.map(function (item) {
        return (
            <BrowserRouter>
                <tr>
                    <td>{item.planId}</td>
                    <td>{item.planName}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.status}</td>
                    <td className="d-flex border border-light">
                        <button
                            className="btn btn-link"
                            type="button"
                            onClick={editPlan(item._id)}>
                            Edit</button>

                        <button
                            className="btn btn-link"
                            type="button"
                            onClick={deletePlan(item._id)}>
                            Delete</button>
                    </td>
                </tr>
            </BrowserRouter>
        )
    })

    return (
        <>
            <Header />
            <div className="col-sm-6 main-alert display-none">
                <div className="alert alert-success" role="alert">
                    Auto Disappear Alert Box !!</div>
            </div>
            <div className="container border col-sm-8 mx-auto my-5 p-3 shadow">
                <h4 className="my-2">Add Plan</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="planId">Plan Id</label>
                            <input
                                type="text"
                                id="planId"
                                name="planId"
                                value={planData.planId}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Please Enter Plan Id" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="planName">Plan Name</label>
                            <input
                                type="text"
                                id="planName"
                                name="planName"
                                value={planData.planName}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Please Enter Plan Name" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="description">Plan Description</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={planData.description}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter Plan Description" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="price">Price</label>
                            <input className="form-control"
                                id="price"
                                type="text"
                                name="price"
                                value={planData.price}
                                onChange={handleChange}
                                placeholder="Please Enter Price" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="price">Price</label>
                            <select className="form-control" id="status" name="status" value={planData.status} onChange={handleChange}>
                                <option>Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Deactive">Deactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-3 col-sm-12 row justify-content-center">
                        <button type="submit" value="Submit" className="btn btn-outline-primary">{planData._id ? "Edit Plan" : "Add Plan"}</button>

                    </div>
                </form>
            </div>
            <div className="container">
                <div className="border m-5 p-3 shadow">
                    <h4>Current Plan Details</h4>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Plan Id</th>
                                <th>Plan Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayPlans}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}