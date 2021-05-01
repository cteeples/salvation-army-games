import React, {useRef, useState, useEffect} from 'react'
import {Container, Button, Row, Modal, Form} from 'react-bootstrap';
import app from "../../../firebase"
import ChatMessage from './ChatMessage'
import './Chat.css'
import firebase from 'firebase/app';
import { useAuth } from '../../../contexts/AuthContext'
import { Checkbox } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


const ref = app.firestore().collection('chats').doc('508cOyZfLHARe7hw9pxQ').collection('messages').orderBy('date').limitToLast(25);
const userRef = app.firestore().collection('users').orderBy("firstName");

export default function ChatBody() {

    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState([])
    const [addUserList, setAddUserList] = useState([])
    const [formValue, setFormValue] = useState('');
    const { currentUser, userInfo} = useAuth()
    const dummy = useRef();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // function handleClick() {
    //     console.log(messages[0].message)
    //     console.log(userInfo)
    // }

    const sendMessage = async (e) => {
        e.preventDefault();

        const newDocRef = app.firestore().collection('chats').doc('508cOyZfLHARe7hw9pxQ').collection('messages').doc();
        await newDocRef.set({
          message: formValue,
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          uid: currentUser.uid,
          id: newDocRef.id,
          date: firebase.firestore.FieldValue.serverTimestamp()
        })
        .catch((err) => {
            console.error(err);
        });
        setFormValue('');
    }

    useEffect(() => {
        ref.onSnapshot(snapshot => (
            setMessages(snapshot.docs.map(doc => doc.data()))
        ))
        userRef.onSnapshot(snapshot => (
          setUsers(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    useEffect(() => {
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages])
    
    return(
    <>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
      <Modal.Header closeButton>
          <Modal.Title>Add User(s)</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{overflowY: "scroll"}}>
        <Form >
          <Form.Group controlId="formBasicCheckbox">
          {users.map(user => <Row><Checkbox label={`${user.firstName} ${user.lastName}`}/></Row>)}
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Add Users</Button>
        </Modal.Footer>
    </Modal>

    <div  className="chat-body app ">
    <Row style={{height: "0px"}} className="d-flex align-items-center">
      <Button onClick={handleShow} variant="success" style={{ width: "3%", marginLeft: "110px", marginTop: "10px"}}><FontAwesomeIcon icon={faPlus} /></Button>
      <Button variant="danger" style={{ width: "3%", marginLeft: "10px", marginTop: "10px"}}><FontAwesomeIcon icon={faMinus}/></Button>
    </Row>
    <main>

      {messages.map(msg => <ChatMessage key={msg.id} firstName={msg.firstName} lastName={msg.lastName} text={msg.message} uid={msg.uid} />)}

      <span ref={dummy}></span>

    </main>

    <form className="form" onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Aa" />

      <button  className="form-button" type="submit" disabled={!formValue}>Send</button>
    </form>
    </div>
    </>
    ) 
}