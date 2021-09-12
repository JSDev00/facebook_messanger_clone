import { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

import "./App.css";
import Message from "./Message";
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([
    { username: "sonny", message: "hey guys" },
    { username: "Quiz", message: "lorem ipsum" },
  ]);
  const [username, setUsername] = useState('');

  //useState  = variable in REACT
  //useEffect = run code on a condition REACT


  useEffect(() => {
    //run the code when the app is loaded 
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => ({id:doc.id ,message:doc.data()})));
    })
  }, [input])
  useEffect(() => {
    //run code here 
    //[] the code run once when the component is finished
    setUsername(prompt('Enter Your Name'));
  }, [])//condition


  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessage([...messages, { username: username, text: input }]);
    setInput('');

  };
  return (
    <div className="App">
      {/* input */}
      {/* Button */}
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/100px-Facebook_Messenger_logo_2018.svg.png" />
      <h1>✌✌ Welcome messenger Clone ✌✌</h1>  
      <h2>Welcome {username}</h2>
     
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter Message</InputLabel>
          <Input className="app__inputIcon" placeholder="Enter Your Message..." value={input} type="text" onChange={(event) => setInput(event.target.value)} />
        </FormControl>
        <IconButton className="app__buttonIcon" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
        <SendIcon/>
        </IconButton>
      </form>
      {/* show messages */}
      <FlipMove>
        {messages.map(({id , message}) => (
          // console.log(message)
          <Message key={id} username={username} message={message} />
          // <p>{message}</p>
        ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
