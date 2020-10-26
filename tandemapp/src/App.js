import QuestionData from './Tandem.json';

function App() {

  // const qArray = QuestionData.splice(0,10);
  // console.log(qArray)

  // function getRandomIntInclusive(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  // }

  // const rand = getRandomIntInclusive(0,9)

  const item = QuestionData[Math.floor(Math.random() * QuestionData.length)];

  // console.log(QuestionData, item)
  
  return (
    <div className="App">
      <h1>
        {item.question}
      </h1>
      <button>
        {item.correct}
      </button>
      
        {item.incorrect.map((el)=> {
          return (
            <button>
              {el}
            </button>
          )
        })}
        
      
      
    </div>
  );
}

export default App;
