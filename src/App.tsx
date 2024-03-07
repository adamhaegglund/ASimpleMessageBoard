import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ChooseName from './components/choose_name';
import MessageBoardPage from './pages/message_board';

function App() {
  const [nameChosen, setNameChosen] = useState(false);
  const [username, setUsername] = useState('');


  const handleNameChosen = (name: string) => {
    setUsername(name);
    setNameChosen(true);
  }
  return (
    <div className="App">
      <div className="container">
      {nameChosen ? <MessageBoardPage username={username}/> : <ChooseName onNameChosen={handleNameChosen} />}

      </div>
    </div>
  );
}

export default App;
