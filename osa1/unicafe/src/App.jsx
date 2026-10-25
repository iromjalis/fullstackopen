import { useState } from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = all ? (good - bad) / all : 0
  const positive = all ? (good / all) * 100 : 0
  return (
    <>
    <h1>statistics</h1>
    
    {all=== 0 ? <p>No feedback given</p> :
    

<table>
  <tbody>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <tr><td>all</td><td>{all}</td></tr>
    <tr><td>average</td><td>{average}</td></tr>
    <tr><td>positive</td><td>{positive} %</td></tr>
  </tbody>
</table>
    }</>

  )
}


function App() {
const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <>
    <h1>give feedback</h1>
    <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
