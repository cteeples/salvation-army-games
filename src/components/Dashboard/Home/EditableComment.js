import React from 'react';
import { Button, Comment, Form } from 'semantic-ui-react'

export default function EditableComment({firstName, lastName, comment, date}) {
    
    function handleEdit() {
        console.log("handling edit")
    }  

    function handleDelete() {
        console.log("handling delete")
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
                <a onClick={handleEdit}>Edit</a>
                </Comment.Actions>
                <Comment.Actions>
                <a onClick={handleDelete}>Delete</a>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
        </div>
    ) 
}