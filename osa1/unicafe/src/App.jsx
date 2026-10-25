import { useState } from "react";
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all ? (good - bad) / all : 0;
  const positive = all ? (good / all) * 100 : 0;

  return (
    <div>
      <h2>statistics</h2>

      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positive} %`} />
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    return setGood(good + 1);
  };
  const handleNeutral = () => {
    return setNeutral(neutral + 1);
  };
  const handleBad = () => {
    return setBad(bad + 1);
  };
  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
