const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => {
    return (sum += part.exercises);
  }, 0);
  return (
    <>
      <b>
        <p>total of {totalExercises} exercises</p>
      </b>
    </>
  );
};
export default Total;
