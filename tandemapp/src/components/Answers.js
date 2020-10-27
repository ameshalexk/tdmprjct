import React, { useState } from 'react';

const Answers = (props) => {
    console.log(props)
    const [questionNum, updateQuestionNum] = useState(0);
    let handleClick = () => {
        updateQuestionNum((n) => n + 1)
      }

    let item = props.question[questionNum]
    console.log(item)

    //Question's Answers are now saved in a variable called displayAnswer
    const displayAnswer = `${item.correct},,${item.incorrect[0]},,${item.incorrect[1]},,${item.incorrect[2]}`
    console.log(displayAnswer)
    //Answers are combined into an array.
    const arrayAnswer =  Array.from(displayAnswer.split(',,'))

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
                {item.question}
            </h1>
            {shuffled.map((el,idx)=> {
                    return (
                        <div>
                            <button key={idx}>
                                 {el}
                            </button>
                        </div>
            )
             })}
             <br/>
            <button onClick={handleClick}>Next</button>
            <h2>Question Number {questionNum+1}</h2>

        </div>
    );
};

export default Answers;
