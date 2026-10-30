const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    // console.log("sum", sum);
    return sum + part.exercises;
  }, 0);

  return (
    <b>
      <p>total of {total} exercises </p>
    </b>
  );
};
export default Total;
