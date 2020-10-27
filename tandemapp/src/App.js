import React, { useState } from 'react';
import QuestionData from './Tandem.json';
import Question from "./components/Answers";


function App() {
  //Picks a random item from array of questions 
  const item = QuestionData[Math.floor(Math.random() * QuestionData.length)];
  //Manages question selected in a state  
  const [question, updateQuestion] = useState({...item});

  return (
    <div className="App">
        <Question question={question}></Question>
    </div>
  );
}

export default App;
