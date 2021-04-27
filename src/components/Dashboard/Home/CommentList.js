import React, {useRef, useState, useEffect}from 'react';
import { Button, Comment, Header } from 'semantic-ui-react'
import {Form} from 'react-bootstrap'
import CommentComponent from './CommentComponent'
import EditableComment from './EditableComment'
import EditableReplyComment from './EditableReplyComment'
import ReplyComment from './ReplyComment'
import { useAuth } from '../../../contexts/AuthContext'
import app from "../../../firebase"

const ref = app.firestore().collection('comments');
const userRef = app.firestore().collection('users');

export default function CommentList() {

    const commentRef = useRef()
    const [error, setError] = useState("")
    const [comments, setComments] = useState([])
    const [userInfo, setUserInfo] = useState([])
    const [lastName, setLastName] = useState("")
    const { currentUser} = useAuth()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        //setComments(getComments())
        ref.onSnapshot(snapshot => (
            setComments(snapshot.docs.map(doc => doc.data()))
        ))

        userRef.doc(currentUser.uid).get().then(snapshot => {
            setUserInfo(snapshot.data())
        })
    }, [])

    function addComment() {
        setLoading(true)

        const commentItem = {
            comment: commentRef.current.value,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            id: currentUser.uid,
            date: app.firestore.FieldValue.serverTimestamp()
        };

        if (commentRef.current.value.length > 0) {
            // ref.doc(currentUser.uid)
            // .set(commentItem)
            ref.add(commentItem)
            .catch((err) => {
                console.error(err);
            });
    
            setLoading(false)
        }

        //console.log(commentRef.current.value)
        
    }

    return(
        <div>
        <Comment.Group threaded>
            <Header as='h3' dividing>
            Comments
            </Header>
            {loading && <h1>Loading...</h1>}
            <CommentComponent firstName="bob" lastName="billy" comment="hello there sir" date="1/2/31"/>
            {comments.map((comment) => <CommentComponent firstName={comment.firstName} lastName={comment.lastName} comment={comment.comment} date={comment.date.toDate().toString()}/>)}
            {/* <Form reply>
            <Form.TextArea ref={commentRef}/>
            <Button disabled={loading} onClick={addComment} content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form> */}
            <Form onSubmit={addComment}>
                <Form.Group id="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={5} ref={commentRef} required />
                </Form.Group>
                <Button disabled={loading} type="submit" className="w-25">Add Reply</Button>
            </Form>
        </Comment.Group>
        </div>
    ) 
}