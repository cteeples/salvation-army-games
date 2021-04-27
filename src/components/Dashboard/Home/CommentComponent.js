import React from 'react';
import { Button, Comment, Form } from 'semantic-ui-react'

export default function ComentComponent({firstName, lastName, comment, date}) {
    
    function handleReply() {
        console.log("handling reply")
    }

    return(
        <div>
        <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>{firstName} {lastName}</Comment.Author>
                <Comment.Metadata>
                <span>{date}</span>
                </Comment.Metadata>
                <Comment.Text>{comment}</Comment.Text>
                <Comment.Actions>
                <a onClick={handleReply}>Reply</a>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
        </div>
    ) 
}