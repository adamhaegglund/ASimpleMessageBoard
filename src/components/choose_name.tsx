import '../css/choose_name.css';
import React, { useState } from 'react';

interface ChooseNameProps{
    onNameChosen: (name: string) => void;
}

function ChooseName({onNameChosen}: ChooseNameProps) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(''); 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(username.trim() === '' || username.length > 11){
      setError('Username must be between 1 and 10 characters');
      console.log('Error: ', error);
    } else {
      setError(''); 
      onNameChosen(username);
      console.log('Username: ', username);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  return (
    <div className="height-container">
    <div className="choose-name-container">
      <div className="padding-container">
        <h1>Choose Your Name</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" value={username} onChange={handleChange}/>
          <input type="submit" value="Submit" />
        </form>
        {error && <h5>{error}</h5>} 
      </div>
    </div>
    </div>
  );
}

export default ChooseName;