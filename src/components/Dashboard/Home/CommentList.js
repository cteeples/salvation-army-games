import React, {useRef, useState, useEffect}from 'react';
import { Button, Comment, Header } from 'semantic-ui-react'
import {Form, Alert} from 'react-bootstrap'
import firebase from 'firebase/app';
import CommentComponent from './CommentComponent'
import EditableComment from './EditableComment'
import { useAuth } from '../../../contexts/AuthContext'
import app from "../../../firebase"
import moment from 'moment'

const ref = app.firestore().collection('comments').orderBy('date').limitToLast(10);
const newDocRef = app.firestore().collection('comments').doc();
const userRef = app.firestore().collection('users');

export default function CommentList() {

    const commentRef = useRef()
    const [error, setError] = useState("")
    const [comments, setComments] = useState([])
    const { currentUser, userInfo} = useAuth()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        //setComments(getComments())
        try {
            ref.onSnapshot(snapshot => (
                setComments(snapshot.docs.map(doc => doc.data()))
            ))
    
            // userRef.doc(currentUser.uid).get().then(snapshot => {
            //     setUserInfo(snapshot.data())
            // })
        }
        catch {
            setError("Error reading data")
        }
    }, [])

    const addComment = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (commentRef.current.value.length > 0) {
            // ref.doc(currentUser.uid)
            // .set(commentItem)
            await newDocRef.set({
                comment: commentRef.current.value,
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                uid: currentUser.uid,
                id: newDocRef.id,
                date: firebase.firestore.FieldValue.serverTimestamp()
            })
            .catch((err) => {
                console.error(err);
                setError(err)
            });
    
            setLoading(false)
        }

        console.log(commentRef.current.value)
        console.log(userInfo.firstName)
        console.log(userInfo.lastName)
        console.log(currentUser.uid)
        
        
    }

    return(
        <div>
        <Comment.Group threaded>
            <Header as='h3' dividing>
            Comments
            </Header>
            {loading && <h1>Loading...</h1>}
            {error && <Alert variant="danger">{error}</Alert>}
            {/* <CommentComponent firstName="bob" lastName="billy" comment="hello there sir" date="1/2/31"/> */}
            {comments && comments.map((comment) => 
            comment.uid === currentUser.uid ? <EditableComment key={comment.id} id={comment.id} firstName={comment.firstName} lastName={comment.lastName} 
                                               comment={comment.comment} date={comment.date && moment(comment.date.toDate().toString()).fromNow()}/>
                                            : <CommentComponent key={comment.id} id={comment.id} firstName={comment.firstName} lastName={comment.lastName} 
                                               comment={comment.comment} date={comment.date && moment(comment.date.toDate().toString()).fromNow()}/>)
            }
            {/* <Form reply>
            <Form.TextArea ref={commentRef}/>
            <Button disabled={loading} onClick={addComment} content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form> */}
            <Form onSubmit={addComment}>
                <Form.Group id="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={5} ref={commentRef} required />
                </Form.Group>
                <Button disabled={loading} type="submit" className="w-25">Add Comment</Button>
            </Form>
        </Comment.Group>
        </div>
    ) 
}