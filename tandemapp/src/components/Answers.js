import React, { useState, useEffect } from 'react';

const Answers = (props) => {
    // console.log(props)
    const [questionNum, updateQuestionNum] = useState(0);
    const [score, updateScore] = useState(1);
    // let item = props.question[questionNum]
    // console.log(item)
    // const [checker, updatechecker] = useState(props.question[questionNum]);

    // useEffect(() => {
    //     console.log('render')       
    // },[questionNum])
    
    // const handleClickNext = (e) => {
    //     if(questionNum<9) {
    //     updateQuestionNum((n) => n + 1)
    //     updatechecker((n) => props.question[questionNum]);
    //     } else {
    //         e.preventDefault();
    //     }
    // };
    
    // const handleClickPrevious = (e) => {
    //     if(questionNum>0) {
    //     updateQuestionNum((n) => n - 1)
    //     updatechecker(props.question[questionNum]);
    //     } else {
    //         e.preventDefault();
    //     }
    // };
    
    const handleCheck = (event) => {
        console.log(questionNum)
        if(questionNum<9) {
            if (event.target.outerText===props.question[questionNum].correct) {     
                updateQuestionNum((n) => n + 1)
                updateScore((n) => n + 1)
                console.log(score)
                alert("wow")

            // updatechecker(props.question[props.question[questionNum]]);
            } else {
                updateQuestionNum((n) => n + 1)
                alert("no")

            // updatechecker(props.question[props.question[questionNum]]);
            }
        } else {
            alert(`Your score is ${score}`)
            window.location.reload();
        }
    };

    const correctAnswer = props.question[questionNum].correct
    const incorrectAnswer = props.question[questionNum].incorrect.map(c => {
        return c
    })
    let updatedAnswer = incorrectAnswer.join("*");
    const displayAnswer = `${correctAnswer}*${updatedAnswer}`

    //Answers are combined into an array.
    const arrayAnswer =  Array.from(displayAnswer.split('*'))

    //Array of answers is now reshuffled
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    const shuffled = arrayAnswer
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)

    //Component Question now renders the question and the answers in random order
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
            {/* <h2>Question Number {props.question[questionNum]+1}</h2> */}

        </div>
    );
};

export default Answers;
