const Total = ({exercises1, exercises2, exercises3}) => {
  const totalExercises = exercises1 + exercises2 + exercises3
  
  return <><p>Number of exercises {totalExercises}</p></>
}
export default Total