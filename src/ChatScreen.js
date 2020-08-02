import React,{ useState }from 'react'
import { Avatar } from '@material-ui/core';

import "./ChatScreen.css";
function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] =  useState([
        {
            name: 'Megan',
            image: "",
            message: "Hi"
        },
        {
            name: 'Megan',
            image: "",
            message: "Whats up"
        },
        {
            message: "Hows it going"
        },
    ]);
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">You matched with Megan on 06/07/1990</p>
            {messages.map((message) => (
                (message.name? (
                <div className="chatScreen__message"> 
                    <Avatar className="chatScreen_avatar"
                        alt={message.name}
                        src={message.src}/>
                    <p className="chatScreen_text">{message.message}</p>
                </div>
                ):(
                    <div className="chatScreen__message"> 
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                ))
            ))}
            
            <div>
            <form  className="chatScreen__input">
                    <input value={input} onChange={
                        (e) => {
                            setInput(e.target.value)
                        }
                    }
                        className="chatScreen__inputField" placeholder="Type a message..." type="text"/>
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            
            </div>
        </div>
        
    )
}

export default ChatScreen
