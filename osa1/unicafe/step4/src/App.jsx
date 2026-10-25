import { useState } from "react";
// a proper place to define a component
const Statistics = ({ good, neutral, bad, total }) => {
  const positive = total ? (good / total) * 100 : 0;
  const average = total ? (good - bad) / total : 0;

  return (
    <>
      <div>
        <p>good&nbsp;{good}</p>
        <p>neutral&nbsp;{neutral}</p>
        <p>bad&nbsp;{bad}</p>
      </div>
      <p>average &nbsp;{average}</p>
      <p>positive &nbsp;{positive}&nbsp;%</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <h2>statistics</h2>

      {total ? (
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default App;
