
import React, { useState } from 'react';
import '../css/message_board.css';

interface Message {
  message: string;
  date: string;
  user: string;
}

function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handlePostMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const newMessage: Message = {
      message: currentMessage,
      date: new Date().toDateString(),
      user: 'username', 
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
            <button type="submit">Post Message</button>
        </form>
      </div>
      {messages.map((message, index) => (
        <div key={index}>
          <p>{message.user}: {message.message}</p>
          <p>{message.date}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageBoard;