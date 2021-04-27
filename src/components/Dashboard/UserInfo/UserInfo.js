import React, { Container, Component, useState }from 'react'
import { Card, Button, Alert, Navbar } from 'react-bootstrap'
import { useAuth } from '../../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import app from "../../../firebase"

const ref = app.firestore().collection('users');

export default function Dashboard() {
    const [error, setError] = useState("")
    const [userInfo, setUserInfo] = useState([])
    const { currentUser, logout, getUserInfo } = useAuth()
    const history = useHistory()

    React.useEffect(() => {
        setError("")
        try {
            var items = []

           ref.doc(currentUser.uid).get().then(doc => {
            // doc.forEach(doc => {
            //     items.append(doc.data())
            // })
            // return doc.data()
            items.push(doc.data())
            })
            setUserInfo(items)
        }
        catch {
            setError("Error reading data")
        }
        
    }, [])

    async function handleLogout(){
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    function handleData(){
        console.log(userInfo)
        console.log(typeof userInfo)
        console.log(userInfo.length)
        setError("error")
    }

    return (
        <>
        {/* <Container><p>hello</p></Container> */}
        {(userInfo.length > 0) && <h2>{userInfo[0].lastName}</h2>}
            <div style={{ minWidth: "100vh"}}>
            {/* <Card className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}> */}
            <Card className = "ml-5 d-flex align-items-center justify-content-center" >
                <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                
                <strong>Email: </strong>{currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                    Update Profile
                </Link>
                </Card.Body>
            <div>
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
                <Button variant="link" onClick={handleData}>get data</Button>
            </div>
            </Card>
            </div>

        </>
    )
}
