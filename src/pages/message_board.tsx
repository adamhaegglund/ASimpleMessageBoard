
import React, { useState } from 'react';
import '../css/message_board.css';

interface Message {
  message: string;
  date: string;
  user: string;
}

interface MessageBoardProps{
    username: string;
    
}

function MessageBoard({username}: MessageBoardProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handlePostMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMessage: Message = {
      message: currentMessage,
      date: new Date().toDateString(),
      user: username, 
    };
    setMessages([...messages, newMessage]);
    setCurrentMessage(''); 
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  return (
    <div>
        <h1>A Simple Message Board</h1>
      <div className="form-container">
        <form onSubmit={handlePostMessage}>
            <input type="text" value={currentMessage} onChange={handleChange} />  
            <button type="submit">POST MESSAGE</button>
        </form>
      </div>
      {messages.map((message, index) => (
        <div key={index} className="message-container">
          <p className="message-content">{message.message}</p>
          <p className="message-legend">{message.user} on {message.date}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageBoard;