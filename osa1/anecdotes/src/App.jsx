import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  //!anecdote, which has max of votes
  const maxVotes = Math.max(...Object.values(votes));
  //!index of best anecdote
  const bestIndex = Object.keys(votes).find((key) => votes[key] === maxVotes);

  //!show anecdotes randomly with no order
  const handleNextAnecdote = () => {
    //generate random numbers to show one anecdote from the list
    const randomIndex = Math.floor(Math.random() * anecdotes.length);

    return setSelected(randomIndex);
  };

  //!add votes for the shown anecdote and store the votes of each anecdote into an array or object in the component's state
  const handleVote = () => {
    const copy = { ...votes };
    copy[selected] += 1;
    console.log("votes[bestIndex]", votes[bestIndex]);

    return setVotes(copy);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      &nbsp;
      <button onClick={handleNextAnecdote}>next anecdote</button>
      {maxVotes === 0 ? (
        ""
      ) : (
        <>
          <h1>Anecdotes with most votes</h1>
          <p>{anecdotes[bestIndex]}</p>
        </>
      )}
    </div>
  );
};

export default App;
