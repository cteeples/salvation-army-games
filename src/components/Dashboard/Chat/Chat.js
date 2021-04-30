import React from 'react';
import {Container} from 'react-bootstrap';
import ChatSideNav from './ChatSideNav'
import ChatBody from './ChatBody'

export default function Chat() {
    return(
    <div>
        <ChatSideNav/>
        <ChatBody/>
    </div>
    ) 
}