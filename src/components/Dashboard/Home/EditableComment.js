import React, {useState, useRef, useEffect} from 'react';
import { Button, Comment} from 'semantic-ui-react'
import {Row, Col, Form} from 'react-bootstrap'
import app from "../../../firebase"
import firebase from 'firebase/app';
import { useAuth } from '../../../contexts/AuthContext'
import EditableReplyComment from './EditableReplyComment'
import ReplyComment from './ReplyComment'
import moment from 'moment'

export default function EditableComment({id, firstName, lastName, comment,  date}) {

    const newReplyRef = app.firestore().collection('comments').doc(id).collection('replys').doc();
    const replyRef = app.firestore().collection('comments').doc(id).collection('replys');

    const [editing, setEditing] = useState(false)
    const [replying, setReplying] = useState(false)
    const [loading, setLoading] = useState(false)
    const [replys, setReplys] = useState([])
    const commentRefEdit = useRef()
    const commentRefReply = useRef()
    const { currentUser, userInfo} = useAuth()

    function handleReply() {
        console.log("handling reply")
        setReplying(!replying)
    }

    const addReply = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (commentRefReply.current.value.length > 0) {
            // ref.doc(currentUser.uid)
            // .set(commentItem)
            await newReplyRef.set({
                comment: commentRefReply.current.value,
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                uid: currentUser.uid,
                id: newReplyRef.id,
                superId: id,
                date: firebase.firestore.FieldValue.serverTimestamp()
            })
            .catch((err) => {
                console.error(err);
            });
        }
        setReplying(false)
        setLoading(false)
    }

    function handleEdit() { setEditing(!editing) }  

    function updateComment() {
        setLoading(true)
        app.firestore().collection('comments').doc(id).update({
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
        app.firestore().collection('comments').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    useEffect(() => {
        replyRef.onSnapshot(snapshot => (
            setReplys(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return(
        <div>
        <Comment>
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
                {
                    replying ? 
                    [
                    <Form.Control ref={commentRefReply} type="text" placeholder="Aa"/>,
                     <Button disabled={loading} onClick={addReply} type="submit" className="w-15">Reply</Button>
                    ]     
                    :<></>
                }
                <Row>
                <Col className="col-1">
                <Comment.Actions>
                    <a onClick={handleReply}> Reply </a>
                </Comment.Actions>
                </Col>  
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
                {
                replys && replys.map(comment => 
                comment.uid == currentUser.uid 
                ? 
                <EditableReplyComment key={comment.id} superId={comment.superId} id={comment.id} firstName={comment.firstName} lastName={comment.lastName} 
                comment={comment.comment} date={comment.date && moment(comment.date.toDate().toString()).fromNow()}/>
                : 
                <ReplyComment key={comment.id} superId={comment.superId} id={comment.id} firstName={comment.firstName} lastName={comment.lastName} 
                comment={comment.comment} date={comment.date && moment(comment.date.toDate().toString()).fromNow()}/>)
                }
            </Comment.Content>
        </Comment>
        </div>
    ) 
}