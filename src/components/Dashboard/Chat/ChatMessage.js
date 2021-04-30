import React, { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext'

export default function ChatMessage({firstName, lastName, text, uid}) {

    const { currentUser} = useAuth()

    const firstInitial = firstName[0].toUpperCase()
    const lastInitial = lastName[0].toUpperCase()
  
    const messageClass = uid === currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <p className="img">{firstInitial}{lastInitial}</p>
        <p>{text}</p>
      </div>
    </>)
  }