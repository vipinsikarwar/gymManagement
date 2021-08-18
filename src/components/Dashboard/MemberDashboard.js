import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import PlayerPic from '../../resources/profile-pic.png';

export default function MemberDashboard() {
    const [user, setUser] = useState([]);
    const [uesrEdit, setUserEdit] = useState([]);
    const myLoginData = JSON.parse(localStorage.getItem('myloginData'))

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/users/user/${myLoginData._id}`) //Axios usage
        .then((res) => {
            console.log(res.data);
            setUser(res.data);
        })
    }, [])

    // const edit = (id) => () => {
    //     const userEdit = users.find((data)=>{
    //         return data._id === id
    //     })
    //     setUserEdit({
    //         ...userEdit,
    //     })
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const userId = event.target.dataset.id;
        
    //     axios.put(`http://localhost:5000/api/v1/users/edituser/${userId}`, userEdit)
    //     .then((res) => {
    //         if (res.status === 200) {
    //           console.log(res.data);
    //           alert(res.data.message)
    //         }
    //     })
    //     .catch((res) => {
    //         console.log(res.message);
    //     })
    // }

    return(
        <>
            <Header/>
            <Container>
                <Row className="p-3">
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={PlayerPic} />
                            <Card.Body>
                                <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                                
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <h4>My Profile</h4>
                        <Table striped bordered hover>
                            <thead>
                                <th className="text-center" colSpan="2">Member Details</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>User Name</th>
                                    <td>{user.userName}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{user.gender}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{user.phone}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{user.address}</td>
                                </tr>
                                <tr>
                                    <th>Password</th>
                                    <td>{user.password}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}