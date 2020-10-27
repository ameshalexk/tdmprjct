import React, { useState } from 'react';
import QuestionData from './Tandem.json';
import Question from "./components/Answers";
import Score from "./components/Score";

function App() {
  // https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
const shuffled = QuestionData.sort(() => 0.5 - Math.random()).slice(0, 10);
// const item = selected[Math.floor(Math.random()*selected.length)];

  //Manages question selected in a state  
  const [question, updateQuestion] = useState(shuffled);
  // console.log(shuffled)
  
  // const handleSubmit = event => {
  //   event.preventDefault();
    
  // };

  // let changeNum = () => {
  //   updateQuestionNum((n) => n + 1);
  //   console.log(questionNum)
  // }

  
  
  // useEffect(() => {
  //   console.log(questionNum)
  // }, [questionNum]);

  
  return (
    <div className="App">
        <Question question={question}></Question>
        <Score  ></Score>
    </div>
  );
}

export default App;
