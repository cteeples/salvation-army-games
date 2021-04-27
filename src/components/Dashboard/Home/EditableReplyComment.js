import React from 'react';
import {Comment } from 'semantic-ui-react'

export default function EditableReplyComment({firstName, lastName, comment, date}) {

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
            </Comment.Content>
        </Comment>
        </div>
    ) 
}