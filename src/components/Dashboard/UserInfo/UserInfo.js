import React, { Container, Component, useState }from 'react'
import { Card, Button, Alert, Navbar, Row, Col } from 'react-bootstrap'
import { useAuth } from '../../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import app from "../../../firebase"

const ref = app.firestore().collection('users');

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout, userInfo} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
        {/* <Container><p>hello</p></Container> */}
            <div >
            {/* <Card className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}> */}
            <Card style={{height: "85vh", minWidth: "80vh"}} className = "ml-5 d-flex  justify-content-center" >
                <Card.Body>
                <h2 className=" mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Row>
                <strong className=" ml-3 mb-4">User: </strong>{userInfo && userInfo.firstName} {userInfo && userInfo.lastName}
                </Row>
                <Row>
                <strong className="ml-3  mb-4">Email: </strong>{currentUser.email}
                </Row>
                <Link  style={{maxWidth: "25vh"}} to="/dashboard/update-profile" className="btn btn-primary w-100 mt-3">
                    Update Profile
                </Link>
                </Card.Body>
            <div>
                <Button variant="link" style={{maxWidth: "25vh"}} onClick={handleLogout}>Log Out</Button>
            </div>
            </Card>
            </div>

        </>
    )
}
