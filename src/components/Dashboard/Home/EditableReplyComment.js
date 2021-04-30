import React, {useState, useRef, useEffect} from 'react';
import {Comment, Button } from 'semantic-ui-react'
import {Row, Col, Form} from 'react-bootstrap'
import app from "../../../firebase"
import firebase from 'firebase/app';
import { useAuth } from '../../../contexts/AuthContext'
import moment from 'moment'

export default function EditableReplyComment({id, superId, firstName, lastName, comment, date}) {

    const [editing, setEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    const commentRefEdit = useRef()
    const { currentUser} = useAuth()

    function handleEdit() { setEditing(!editing) }  

    function handleDelete() {
        console.log("handling delete")
    }

    function updateComment() {
        setLoading(true)
        app.firestore().collection('comments').doc(superId).collection("replys").doc(id).update({
            comment: commentRefEdit.current.value,
            date: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
        setEditing(false)
        setLoading(false)
    }

    function handleDelete() {
        app.firestore().collection('comments').doc(superId).collection('replys').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return(
        <div>
        <Comment className="small">
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>{firstName} {lastName}</Comment.Author>
                <Comment.Metadata>
                <span>{date}</span>
                </Comment.Metadata>
                {
                    editing ? 
                    [
                    <Form.Control ref={commentRefEdit} type="text" placeholder={comment} />,
                     <Button disabled={loading} onClick={updateComment} type="submit" className="w-15">Update Comment</Button>
                    ]     
                    :<Comment.Text>{comment}</Comment.Text>
                }
                <Row> 
                <Col className="col-1">
                <Comment.Actions>
                    <a onClick={handleEdit}> Edit </a>
                </Comment.Actions>
                </Col>  
                <Col className="col-1">
                <Comment.Actions>
                    <a onClick={handleDelete}> Delete </a>
                </Comment.Actions>
                </Col >
                </Row>
            </Comment.Content>
        </Comment>
        </div>
    ) 
}