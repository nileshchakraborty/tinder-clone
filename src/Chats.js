import React from 'react';

import Chat from './Chat';
import "./Chats.css";
function Chats() {
    return (
        <div className="chats">
            <Chat name="Megan" message="Hi" timestamp="40 seconds ago" profilePic="" />
            <Chat name="Mark" message="Hi" timestamp="1 hour ago" profilePic="" />
            <Chat name="Zyan" message="Hi" timestamp="3 days ago" profilePic="" />
            <Chat name="Gal" message="Hi" timestamp="1 week ago" profilePic="" />
        </div>
        
    )
}

export default Chats
