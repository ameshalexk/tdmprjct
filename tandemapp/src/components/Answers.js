import React, { useState, useEffect } from 'react';

const Answers = (props) => {

    //Manages question's number / sequence in state  
    const [questionNum, updateQuestionNum] = useState(0);

    //Manages question's score  in state  
    const [score, updateScore] = useState(1);
    
    //Function to render questions in sequence and update score.
    const handleCheck = (event) => {
        console.log(questionNum)
        if(questionNum<9) {
            if (event.target.outerText===props.question[questionNum].correct) {     
                updateQuestionNum((n) => n + 1)
                updateScore((n) => n + 1)
                console.log(score)
                alert("Correct Answer")
            } else {
                updateQuestionNum((n) => n + 1)
                alert(`Incorrect Answer the corrrect answer was ${props.question[questionNum].correct}`)
            }
        } else {
            //Once the question sequence is finished the score is displayed and page reloaded.
            alert(`Your score is ${score} points`)
            window.location.reload();
        }
    };

    //Stores the correct answer from question
    const correctAnswer = props.question[questionNum].correct

    //Stores the incorrect answer from question
    const incorrectAnswer = props.question[questionNum].incorrect.map(c => {
        return c
    })

    // Joins the correct answer and the incorrect answer
    let updatedAnswer = incorrectAnswer.join("*");

    //Cobines the correct answer and the incorrect answer in a variable using * symbol
    const displayAnswer = `${correctAnswer}*${updatedAnswer}`

    //Answers are combined into an array as items by splitting using * symbol
    const arrayAnswer =  Array.from(displayAnswer.split('*'))

    //Array of answers is now reshuffled
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    const shuffled = arrayAnswer
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)

    //Below Component now renders the question and the answers in random order
    return (
        <div>
            <h1>
                {props.question[questionNum].question}
            </h1>
            {shuffled.map((el,idx)=> {
                    return (
                        <div>
                            <button onClick={handleCheck} key={idx}>
                                 {el}
                            </button>
                        </div>
            )
             })}
             <br/>
            {/* <button onClick={handleClickPrevious}>Previous</button>
            <button onClick={handleClickNext}>Next</button> */}
            <h2>Question Number {questionNum + 1}</h2>

        </div>
    );
};

export default Answers;
