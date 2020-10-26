import QuestionData from './Tandem.json';

function App() {
  return (
    <div className="App">
      <h1>
        {QuestionData.map((question, idx)=> {
          return <div> {console.log(question)}</div>;
        })}
      </h1>
    </div>
  );
}

export default App;
