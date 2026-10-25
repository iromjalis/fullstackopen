import { useState } from "react";
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <tr>
              <td>all</td>
              <td>{all}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{positive} %</td>
            </tr>
          </tbody>
        </table>
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
