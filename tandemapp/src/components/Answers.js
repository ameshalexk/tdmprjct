import React from "react";

const Answers = (props) => {
    //Question's Answers are now saved in a variable called displayAnswer
    const displayAnswer = props.question.correct + ',' + props.question.incorrect

    //Answers are combined into an array.
    const arrayAnswer =  Array.from(displayAnswer.split(','))

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
                {props.question.question}
            </h1>
            
            {shuffled.map((el,idx)=> {
                    return (
            <button key={idx}>
              {el}
            </button>
            )
             })}
            
        </div>
    );
};

export default Answers;
